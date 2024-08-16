package com.aspirecoders.college_pro.controller;

import com.aspirecoders.college_pro.annotation.VerifyJwt;
import com.aspirecoders.college_pro.entity.User;
import com.aspirecoders.college_pro.service.UserService;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private UserService userService;

    @VerifyJwt
    @GetMapping("/secure-endpoint")
    public String secureEndpoint(HttpServletRequest request) {
        return "This is a secure endpoint.\nUser ID: " + request.getAttribute("userId") +
                "\nUser Email: " + request.getAttribute("email") +
                "\nUser Role: " + request.getAttribute("role");
    }

    @VerifyJwt
    @GetMapping("/who-am-i")
    public User whoAmI(HttpServletRequest request) {
        return userService.whoAmI((int) request.getAttribute("userId"));
    }
}
