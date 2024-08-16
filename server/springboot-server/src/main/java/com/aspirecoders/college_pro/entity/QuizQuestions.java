package com.aspirecoders.college_pro.entity;

import java.util.List;

import com.aspirecoders.college_pro.convertor.ListToJsonStringConverter;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "quiz_questions")
public class QuizQuestions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String question;

    @Column(name = "quiz_details_id")
    private int quizDetailsId;

    @Convert(converter = ListToJsonStringConverter.class)
    private List<String> options;

    @Convert(converter = ListToJsonStringConverter.class)
    private List<String> answer;

    private String difficulty;
}
