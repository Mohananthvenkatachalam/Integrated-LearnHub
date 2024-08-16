package com.aspirecoders.college_pro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.aspirecoders.college_pro.annotation.VerifyJwt;
import com.aspirecoders.college_pro.entity.QuizQuestions;
import com.aspirecoders.college_pro.entity.QuizScoreTable;
import com.aspirecoders.college_pro.service.QuizScoreService;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin("*")
@RequestMapping("/api/gateway")
@RestController
public class QuizScoreController {

    @Autowired
    public QuizScoreService quizScoreService;

    public int userId;

    @VerifyJwt
    @PostMapping("/post-score")
    public ResponseEntity<QuizScoreTable> postMethodName(@RequestBody QuizScoreTable entity,
            HttpServletRequest request) {
        userId = (int) request.getAttribute("userId");
        QuizScoreTable scoreTable = quizScoreService.saveScore(entity, userId);
        return new ResponseEntity<>(scoreTable, HttpStatus.CREATED);
    }

    @GetMapping("/get/questions/{quizId}")
    public List<QuizQuestions> getAllQuestions(@PathVariable("quizId") int quizId) {
        System.out.println(quizId);
        return quizScoreService.getAllQuestions(quizId);
    }

}
