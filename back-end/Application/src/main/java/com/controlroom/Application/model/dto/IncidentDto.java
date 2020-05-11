package com.controlroom.Application.model.dto;

import com.controlroom.Application.model.incidentModel.Status;
import com.controlroom.Application.model.reportModel.Report;
import com.controlroom.Application.model.userModel.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.geo.Point;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class IncidentDto {
    private long incidentId;
    private long userId;

    private String title;
    //private Point location;

    private long authorityId;
    private long importanceId;

    private String city;
    private String region;
    private String street;
    private String notes;
    private long statusId;

    private String callerFirstName;
    private String callerLastName;
    private String callerNationalId;
    private String callerPhone;


//    private List<Report> reports;
//    private List<User> receivers;
}
