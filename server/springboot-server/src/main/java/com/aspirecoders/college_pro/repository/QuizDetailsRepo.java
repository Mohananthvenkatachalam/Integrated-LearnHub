package com.aspirecoders.college_pro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aspirecoders.college_pro.entity.QuizDetails;

@Repository
public interface QuizDetailsRepo extends JpaRepository<QuizDetails, Integer> {

}
