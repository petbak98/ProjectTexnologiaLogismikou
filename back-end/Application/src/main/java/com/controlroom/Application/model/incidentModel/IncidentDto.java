package com.controlroom.Application.model.incidentModel;

import com.controlroom.Application.model.reportModel.FullReport;
import com.controlroom.Application.model.userModel.User;
import lombok.Data;

import java.util.List;

@Data
public class IncidentDto {
    private long incidentId;
    private long userId;

    private String title;

    private Authority authority;

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

    private List<FullReport> reports;
    private List<User> receivers;
}
