package com.aspirecoders.college_pro.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(MissingAuthorizationHeaderException.class)
  public ResponseEntity<String> handleMissingAuthorizationHeaderException(MissingAuthorizationHeaderException ex) {
    return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(InvalidJwtException.class)
  public ResponseEntity<String> handleInvalidJwtException(InvalidJwtException ex) {
    return new ResponseEntity<>(ex.getMessage(), HttpStatus.UNAUTHORIZED);
  }
}
