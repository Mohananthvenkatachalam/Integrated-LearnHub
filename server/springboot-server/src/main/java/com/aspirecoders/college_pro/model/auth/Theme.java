package com.aspirecoders.college_pro.model.auth;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class Theme {
    int id;
    String name;
}
