package com.controlroom.Application.converter;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.dto.ReportDto;
import com.controlroom.Application.model.dto.UserPostDto;
import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.reportModel.Report;
import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.service.AuthorityService;
import com.controlroom.Application.service.IncidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserPostConverter {
    @Autowired
    private AuthorityService authorityService;
    private static AuthorityService authorityServiceStatic;

    @Autowired
    private IncidentService incidentService;
    private static IncidentService incidentServiceStatic;

    @Autowired
    public void setStatic() {
        this.authorityServiceStatic = authorityService;
        this.incidentServiceStatic = incidentService;
    }


    public static UserPostDto convertToDto(User user) {
        UserPostDto userPostDto = new UserPostDto();

        userPostDto.setUserId(user.getId());

        userPostDto.setUsername(user.getUsername());
        userPostDto.setPassword(user.getPassword());
        userPostDto.setFirstName(user.getFirstName());
        userPostDto.setLastName(user.getLastName());
        userPostDto.setEmail(user.getEmail());
        userPostDto.setRoles(user.getRoles());

        userPostDto.setLatitude(user.getLatitude());
        userPostDto.setLongitude(user.getLongitude());

        userPostDto.setAuthorityId(user.getAuthority().getId());


        List<IncidentDto> myIncidentDtoList = user.getMyIncidents().stream().map(IncidentConverter::convertToDto).collect(Collectors.toList());
        userPostDto.setMyIncidents(myIncidentDtoList);

        List<IncidentDto> incidentDtoList = user.getIncidents().stream().map(IncidentConverter::convertToDto).collect(Collectors.toList());
        userPostDto.setIncidents(incidentDtoList);

        List<ReportDto> reportDtoList = user.getReports().stream().map(ReportConverter::convertToDto).collect(Collectors.toList());
        userPostDto.setReports(reportDtoList);

        userPostDto.setLastNewIncident(user.getLastNewIncident());

        return userPostDto;
    }

    public static User convert(UserPostDto userPostDto) {
        User user = new User();

        user.setId(userPostDto.getUserId());

        user.setUsername(userPostDto.getUsername());
        user.setPassword(userPostDto.getPassword());
        user.setFirstName(userPostDto.getFirstName());
        user.setLastName(userPostDto.getLastName());
        user.setEmail(userPostDto.getEmail());
        user.setRoles(userPostDto.getRoles());

        user.setLatitude(userPostDto.getLatitude());
        user.setLongitude(userPostDto.getLongitude());

        user.setAuthority(authorityServiceStatic.findById(userPostDto.getAuthorityId()));


        if(userPostDto.getMyIncidents() == null)
            user.setMyIncidents(new ArrayList<Incident>());
        else {
            List<Incident> myIncidentList = userPostDto.getMyIncidents().stream().map(IncidentConverter::convert).collect(Collectors.toList());
            user.setMyIncidents(myIncidentList);
        }

        if(userPostDto.getIncidents() == null)
            user.setIncidents(new ArrayList<Incident>());
        else {
            List<Incident> incidentList = userPostDto.getIncidents().stream().map(IncidentConverter::convert).collect(Collectors.toList());
            user.setIncidents(incidentList);
        }

        if(userPostDto.getReports() == null)
            user.setReports(new ArrayList<Report>());
        else {
            List<Report> reportList = userPostDto.getReports().stream().map(ReportConverter::convert).collect(Collectors.toList());
            user.setReports(reportList);
        }

        user.setLastNewIncident(userPostDto.getLastNewIncident());

        return user;
    }
}