package com.aspirecoders.college_pro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.aspirecoders.college_pro.entity.QuizQuestions;
import com.aspirecoders.college_pro.service.QuizQuestionService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin("*")
@RequestMapping("/api/gateway")
@RestController
public class QuizQuestionsController {

    @Autowired
    public QuizQuestionService quizQuestionService;

    @PostMapping("/post-question")
    public ResponseEntity<QuizQuestions> postMethodName(@RequestBody QuizQuestions entity) {
        boolean result = quizQuestionService.postQuestions(entity);
        if (result == true) {
            return new ResponseEntity<>(null, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    //

    @GetMapping("/getall-question/{quizId}")
    public List<QuizQuestions> getAllQuestions(@PathVariable("quizId") int id) {
        return quizQuestionService.getAllTheQuizQuestions(id);
    }

}
