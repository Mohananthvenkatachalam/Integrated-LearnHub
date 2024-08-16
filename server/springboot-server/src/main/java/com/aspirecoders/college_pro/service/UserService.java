package com.aspirecoders.college_pro.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspirecoders.college_pro.entity.User;
import com.aspirecoders.college_pro.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public User whoAmI(int userId) {
        return userRepo.findById(userId).get();
    }

}
