package com.aspirecoders.college_pro.model.auth;

import java.util.List;

import org.springframework.data.jpa.repository.query.Meta;

import com.aspirecoders.college_pro.entity.Hackathon;

import lombok.Data;

@Data
public class HackathonResponse {

    public List<Hackathon> hackathons;
    public Meta meta;

}
