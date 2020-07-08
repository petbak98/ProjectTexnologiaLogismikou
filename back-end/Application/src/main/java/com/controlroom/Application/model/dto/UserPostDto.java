package com.controlroom.Application.model.dto;

import com.controlroom.Application.model.userModel.Role;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class UserPostDto {
    private long userId;

    @NotNull
    @NotEmpty
    private String username;

    @NotNull
    @NotEmpty
    private String password;

    private String email;

    private String firstName;
    private String lastName;


    private int active;

    private Set<Role> roles;

    private double latitude;
    private double longitude;

    private long authorityId;

    private List<IncidentDto> myIncidents;

    private List<IncidentDto> incidents;
    private List<ReportDto> reports;

    private Date lastNewIncident;
}
