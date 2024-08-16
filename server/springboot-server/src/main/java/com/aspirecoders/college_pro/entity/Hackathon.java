package com.aspirecoders.college_pro.entity;

import java.util.List;

import com.aspirecoders.college_pro.model.auth.DisplayedLocation;
import com.aspirecoders.college_pro.model.auth.Theme;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Hackathon {
    @Id
    private int id;
    private String title;
    @JsonProperty("displayed_location")
    @Embedded
    private DisplayedLocation displayedLocation;
    @JsonProperty("open_state")
    private String openState;
    @JsonProperty("thumbnail_url")
    private String thumbnailUrl;
    @JsonProperty("analytics_identifier")
    private String analyticsIdentifier;
    private String url;
    @JsonProperty("time_left_to_submission")
    private String timeLeftToSubmission;
    @JsonProperty("submission_period_dates")
    private String submissionPeriodDates;
    @ElementCollection
    private List<Theme> themes;
    @JsonProperty("prize_amount")
    private String prizeAmount;
    @JsonProperty("registrations_count")
    private int registrationsCount;
    private boolean featured;
    @JsonProperty("organization_name")
    private String organizationName;
    @JsonProperty("winners_announced")
    private boolean winnersAnnounced;
    @JsonProperty("submission_gallery_url")
    private String submissionGalleryUrl;
    @JsonProperty("start_a_submission_url")
    private String startASubmissionUrl;
    @JsonProperty("invite_only")
    private boolean inviteOnly;
    @JsonProperty("eligibility_requirement_invite_only_description")
    private String eligibilityRequirementInviteOnlyDescription;
    @JsonProperty("managed_by_devpost_badge")
    private boolean managedByDevpostBadge;
}