package com.aspirecoders.college_pro.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "quiz_score")
public class QuizScoreTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "quiz_details_id")
    private int quizDetailsId;

    @Column(nullable = false)
    private int user_id;

    @Column(nullable = false)
    private int score;

    @Column(name = "total_questions", nullable = false)
    private int totalQuestions;
}
