package com.aspirecoders.college_pro.exceptions;

public class MissingAuthorizationHeaderException extends RuntimeException {
  public MissingAuthorizationHeaderException(String message) {
    super(message);
  }
}
