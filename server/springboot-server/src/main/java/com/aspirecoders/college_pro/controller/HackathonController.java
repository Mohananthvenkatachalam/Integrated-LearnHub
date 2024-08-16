package com.aspirecoders.college_pro.controller;

import java.util.List;

import com.aspirecoders.college_pro.entity.Hackathon;
import com.aspirecoders.college_pro.model.auth.HackathonResponse;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@CrossOrigin("*")
@RestController
public class HackathonController {
    RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/hackathons")
    public List<Hackathon> getMethodName(@RequestParam(name = "page") int page) {
        String uri = "https://devpost.com/api/hackathons?page=" + page;

        HackathonResponse hackathons = restTemplate.getForObject(uri, HackathonResponse.class);

        return hackathons.getHackathons();
    }
}
