package com.aspirecoders.college_pro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspirecoders.college_pro.entity.QuizQuestions;
import com.aspirecoders.college_pro.repository.QuizQuestionsRepo;

@Service
public class QuizQuestionService {

    @Autowired
    public QuizQuestionsRepo questionsRepo;

    public boolean postQuestions(QuizQuestions entity) {
        try {
            questionsRepo.save(entity);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    // getting all the Questions based on the id
    public List<QuizQuestions> getAllTheQuizQuestions(int QuizDetailsId) {
        return questionsRepo.findByQuizDetailsId(QuizDetailsId);
    }
}
