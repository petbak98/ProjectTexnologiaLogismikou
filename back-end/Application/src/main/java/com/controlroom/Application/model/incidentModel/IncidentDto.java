package com.controlroom.Application.model.incidentModel;

import com.controlroom.Application.model.reportModel.Report;
import com.controlroom.Application.model.userModel.User;
import lombok.Data;

import java.util.List;

@Data
public class IncidentDto {
    private long incidentId;
    private long userId;

    private String title;

    private IncidentAuthority incidentAuthority;

    private Importance importance;

    private String city;
    private String region;
    private String street;
    private String notes;
    private Status status;

    private String callerFirstName;
    private String callerLastName;
    private String callerNationalId;
    private String callerPhone;

    private List<Report> reports;
    private List<User> receivers;
}
