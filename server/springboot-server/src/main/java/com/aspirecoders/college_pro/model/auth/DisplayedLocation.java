package com.aspirecoders.college_pro.model.auth;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Embeddable
@Data
public class DisplayedLocation {
    String icon;
    String location;
}
