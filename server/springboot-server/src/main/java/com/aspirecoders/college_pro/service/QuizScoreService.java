package com.aspirecoders.college_pro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspirecoders.college_pro.entity.QuizScoreTable;
import com.aspirecoders.college_pro.repository.QuizQuestionsRepo;
import com.aspirecoders.college_pro.entity.QuizQuestions;
import com.aspirecoders.college_pro.repository.QuizScoreTableRepo;

@Service
public class QuizScoreService {

    @Autowired
    public QuizScoreTableRepo quizScoreTableRepo;

    @Autowired
    public QuizQuestionsRepo quizQuestionsRepo;

    public QuizScoreTable saveScore(QuizScoreTable entity, int userId) {
        QuizScoreTable q = new QuizScoreTable();
        q.setId(entity.getId());
        q.setQuizDetailsId(entity.getQuizDetailsId());
        q.setScore(entity.getScore());
        q.setUser_id(userId);
        q.setTotalQuestions(entity.getTotalQuestions());
        return quizScoreTableRepo.save(q);
    }

    public List<QuizQuestions> getAllQuestions(int quizId) {
        return quizQuestionsRepo.findByQuizDetailsId(quizId);

    }
}
