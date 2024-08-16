package com.aspirecoders.college_pro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspirecoders.college_pro.entity.Hackathon;
import com.aspirecoders.college_pro.repository.HackathonRepo;

@Service
public class HackathonService {
    @Autowired
    private HackathonRepo hackathonRepo;

    public List<Hackathon> getAllHackathons() {
        return hackathonRepo.findAll();
    }

    public List<Hackathon> getHackathons(int page) {
        return hackathonRepo.findAll();
    }
}
