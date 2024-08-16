package com.aspirecoders.college_pro.entity;

import java.sql.Blob;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class CourseList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int courseId;
    String url;
    String title;
    String brand;
    String type;
    @Column(columnDefinition = "MEDIUMBLOB")
    byte[] thumbnail;
    String image;
    String category;
    String certificateIsAvailable;

    @Column(columnDefinition = "TEXT")
    String description;
    String duration;
    String level;
    String price;
    String rating;
    Date timestamp;
}