package com.aspirecoders.college_pro.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aspirecoders.college_pro.entity.QuizQuestions;

@Repository
public interface QuizQuestionsRepo extends JpaRepository<QuizQuestions, Integer> {
    List<QuizQuestions> findByQuizDetailsId(int quizDetailsId);
}
