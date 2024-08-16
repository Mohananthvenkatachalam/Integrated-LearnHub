package com.aspirecoders.college_pro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aspirecoders.college_pro.entity.CourseList;
import com.aspirecoders.college_pro.service.CourseListService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class CourseListController {
    @Autowired
    private CourseListService courseListService;

    @GetMapping("/courses")
    public Page<CourseList> getCourses(@RequestParam(name = "page") int page,
            @RequestParam(name = "sortBy", defaultValue = "title") String sortBy,
            @RequestParam(name = "search") String search) {
        Pageable pageable = PageRequest.of(page, 9);
        return courseListService.getCourses(search, pageable, sortBy);
    }

    @PostMapping("/courses/addCourse")
    public CourseList postMethodName(@RequestBody CourseList entity) {
        return courseListService.addCourse(entity);
    }

}
