package com.aspirecoders.college_pro.exceptions;

public class InvalidJwtException extends RuntimeException {
  public InvalidJwtException(String message) {
    super(message);
  }
}
