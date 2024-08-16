package com.aspirecoders.college_pro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspirecoders.college_pro.entity.QuizDetails;
import com.aspirecoders.college_pro.repository.QuizDetailsRepo;

@Service
public class QuizDetailsService {
    @Autowired
    public QuizDetailsRepo quizDetailsRepo;

    public QuizDetails postQuizDetails(QuizDetails entity, int admin_id) {
        int random = (int) (Math.random() * 100); // Corrected random generation
        QuizDetails q = new QuizDetails();
        q.setAdmin_id(admin_id);
        q.setDescription(entity.getDescription());
        q.setTitle(entity.getTitle());
        q.setTotal_attended_count(random);
        return quizDetailsRepo.save(q);
    }

    public List<QuizDetails> findAllDetails() {
        return quizDetailsRepo.findAll();
    }
}
