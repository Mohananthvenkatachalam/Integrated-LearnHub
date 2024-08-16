package com.aspirecoders.college_pro.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.aspirecoders.college_pro.entity.CourseList;

@Repository
public interface CourseListRepo extends JpaRepository<CourseList, Integer> {

    @Query("SELECT c FROM CourseList c WHERE c.title LIKE %:search% ORDER BY c.timestamp DESC")
    Page<CourseList> searchAndSortByNewest(@Param(value = "search") String search, Pageable pageable);

    @Query("SELECT c FROM CourseList c WHERE c.title LIKE %:search% ORDER BY c.rating DESC")
    Page<CourseList> searchAndSortByPopular(@Param(value = "search") String search, Pageable pageable);

    @Query("SELECT c FROM CourseList c WHERE c.title LIKE %:search% ORDER BY c.price DESC")
    Page<CourseList> searchAndSortByPriceHigh(@Param(value = "search") String search, Pageable pageable);

    @Query("SELECT c FROM CourseList c WHERE c.title LIKE %:search% ORDER BY c.price ASC")
    Page<CourseList> searchAndSortByPriceLow(@Param(value = "search") String search, Pageable pageable);

    @Query("SELECT c FROM CourseList c WHERE c.title LIKE %:search% AND c.price = '0' ORDER BY c.timestamp DESC")
    Page<CourseList> searchAndSortByPriceFree(@Param(value = "search") String search, Pageable pageable);

    List<CourseList> findByCourseId(int id);
}
