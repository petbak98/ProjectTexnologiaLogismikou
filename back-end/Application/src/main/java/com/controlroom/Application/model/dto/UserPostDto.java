package com.controlroom.Application.model.dto;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class UserPostDto {
    private long userId;

    private List<IncidentDto> myIncidents;
    @NotNull
    @NotEmpty
    private String username;

    @NotNull
    @NotEmpty
    private String password;

    private String firstName;
    private String lastName;


    private int active;

    private String roles = "";
    private String permissions = "";

    private double latitude;
    private double longitude;

    private long authorityId;

    private List<IncidentDto> incidents;
    private List<ReportDto> reports;
}
