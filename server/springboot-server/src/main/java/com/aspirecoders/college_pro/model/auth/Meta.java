package com.aspirecoders.college_pro.model.auth;

import jakarta.persistence.Embeddable;

@Embeddable
public class Meta {
    public int total_count;
    public int per_page;
    public boolean fuzzy;
}
