package com.aspirecoders.college_pro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.aspirecoders.college_pro.annotation.VerifyJwt;
import com.aspirecoders.college_pro.entity.QuizDetails;
import com.aspirecoders.college_pro.service.QuizDetailsService;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin("*")
@RequestMapping("/api/gateway")
@RestController
public class QuizDetailsController {

    @Autowired
    public QuizDetailsService quizDetailsService;

    @VerifyJwt
    @PostMapping("/create-quiz")
    public ResponseEntity<QuizDetails> postQuizDetails(@RequestBody QuizDetails entity, HttpServletRequest request) {
        int admin_id = (int) request.getAttribute("userId");
        System.out.println(admin_id);
        QuizDetails result = quizDetailsService.postQuizDetails(entity, admin_id);
        if (result == null) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
            return new ResponseEntity<>(result, HttpStatus.CREATED);
        }
    }

    @GetMapping("/get-all-quiz")
    public List<QuizDetails> getMethodName() {
        return quizDetailsService.findAllDetails();
    }

}
