package com.aspirecoders.college_pro.aspect;

import com.aspirecoders.college_pro.annotation.VerifyJwt;
import com.aspirecoders.college_pro.exceptions.InvalidJwtException;
import com.aspirecoders.college_pro.exceptions.MissingAuthorizationHeaderException;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import jakarta.servlet.http.HttpServletRequest;

@Aspect
@Component
public class VerifyJwtAspect {

  @Value("${jwt.secret}")
  private String SECRET_KEY;
  private Algorithm algorithm;

  private final HttpServletRequest request;

  @Autowired
  public VerifyJwtAspect(HttpServletRequest request) {
    this.request = request;
  }

  @PostConstruct
  public void init() {
    this.algorithm = Algorithm.HMAC256(SECRET_KEY);
  }

  @Before("@annotation(verifyJwt)")
  public void verifyJwtToken(VerifyJwt verifyJwt) throws Throwable {
    String token = request.getHeader("Authorization");

    if (token != null && token.startsWith("Bearer ")) {
      token = token.substring(7); // Remove "Bearer " prefix
    } else {
      throw new MissingAuthorizationHeaderException("Missing or invalid Authorization header");
    }

    if (!isValidToken(token)) {
      throw new InvalidJwtException("Invalid JWT token");
    }
  }

  private boolean isValidToken(String token) {
    try {
      JWTVerifier verifier = JWT.require(algorithm).build();
      DecodedJWT decodedJWT = verifier.verify(token);

      // Extract claims
      Integer userId = decodedJWT.getClaim("id").asInt();
      String role = decodedJWT.getClaim("role").asString();
      String email = decodedJWT.getClaim("email").asString();

      // Set claims as request attributes
      request.setAttribute("userId", userId);
      request.setAttribute("role", role);
      request.setAttribute("email", email);

      return true;
    } catch (JWTVerificationException exception) {
      return false;
    }
  }
}