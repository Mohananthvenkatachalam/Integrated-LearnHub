package com.aspirecoders.college_pro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aspirecoders.college_pro.entity.User;

public interface UserRepo extends JpaRepository<User, Integer> {
}
