package com.aspirecoders.college_pro.entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "fullname")
    String fullname;

    @Column(name = "email")
    String email;

    @Column(name = "phone")
    String phone;

    @Column(name = "role")
    String role;

    @Column(name = "profile_img")
    String profile_img;

    @JsonIgnore
    @Column(name = "hashed_password")
    String hashed_password;

    @Column(name = "created_at")
    Date created_at;

    @Column(name = "updated_at")
    Date updated_at;

}
