package com.aspirecoders.college_pro.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.aspirecoders.college_pro.entity.CourseList;
import com.aspirecoders.college_pro.repository.CourseListRepo;

@Service
public class CourseListService {
    @Autowired
    private CourseListRepo courseListRepo;

    public Page<CourseList> getCourses(String search, Pageable pageable, String sortBy) {
        switch (sortBy) {
            case "newest":
                return courseListRepo.searchAndSortByNewest(search, pageable);
            case "popular":
                return courseListRepo.searchAndSortByPopular(search, pageable);
            case "price-high":
                return courseListRepo.searchAndSortByPriceHigh(search, pageable);
            case "price-low":
                return courseListRepo.searchAndSortByPriceLow(search, pageable);
            case "free":
                return courseListRepo.searchAndSortByPriceFree(search, pageable);
            default:
                return courseListRepo.searchAndSortByNewest(search, pageable);
        }
    }

    public CourseList getCourseById(int id) {
        return courseListRepo.findByCourseId(id).stream().findFirst().orElse(null);
    }

    public CourseList addCourse(CourseList entity) {
        return courseListRepo.save(entity);
    }
}
