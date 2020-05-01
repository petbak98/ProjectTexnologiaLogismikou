package com.controlroom.Application.model.incidentModel;

import com.controlroom.Application.model.reportModel.Report;
import com.controlroom.Application.model.userModel.User;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@ToString
@Getter
@Setter
public class IncidentDto {
    private long incidentId;
    private long userId;

    private String title;
    private String authority;
    private int importance;

    private String city;
    private String region;
    private String street;
    private String notes;
    private String status;

    private String callerFirstName;
    private String callerLastName;
    private String callerNationalId;
    private String callerPhone;

    private List<Report> reports;
    private List<User> receivers;
}
