package com.controlroom.Application.converter;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.dto.ReportDto;
import com.controlroom.Application.model.dto.UserDto;
import com.controlroom.Application.model.incidentModel.Authority;
import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.reportModel.Report;
import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.repository.ReportRepository;
import com.controlroom.Application.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class IncidentConverter {


    // =================================================== \\
    @Autowired
    private StatusService statusService;
    private static StatusService statusServiceStatic;

    @Autowired
    private UserService userService;
    private static UserService userServiceStatic;

    @Autowired
    private AuthorityService authorityService;
    private static AuthorityService authorityServiceStatic;


    @Autowired ImportanceService importanceService;
    private static ImportanceService importanceServiceStatic;


    @Autowired
    public void setStatic() {
        this.statusServiceStatic = statusService;
        this.userServiceStatic = userService;
        this.authorityServiceStatic = authorityService;
        this.importanceServiceStatic = importanceService;
    }
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \\

    @Autowired
    private ReportService reportService;
    @Autowired
    private ReportConverter reportConverter;

    public IncidentDto convertToDto(Incident incident) {

        IncidentDto incidentDto = new IncidentDto();

        incidentDto.setIncidentId(incident.getId());
        incidentDto.setCoordinatorId(incident.getCoordinator().getId());
        incidentDto.setCoordinatorName(incident.getCoordinator().getUsername());

        incidentDto.setTitle(incident.getTitle());

        incidentDto.setLastUpdate(incident.getLastUpdate());
        incidentDto.setCreationTimestamp(incident.getCreationTimestamp());

        incidentDto.setAuthorityId(incident.getAuthority().getId());
        incidentDto.setImportanceId(incident.getImportance().getId());

        incidentDto.setNumber(incident.getNumber());
        incidentDto.setRegion(incident.getRegion());
        incidentDto.setStreet(incident.getStreet());
        incidentDto.setPostalCode(incident.getPostalCode());

        incidentDto.setNotes(incident.getNotes());
        incidentDto.setStatusId(incident.getStatus().getId());

        incidentDto.setCallerFirstName(incident.getCallerFirstName());
        incidentDto.setCallerLastName(incident.getCallerLastName());
        incidentDto.setCallerNationalId(incident.getCallerNationalId());
        incidentDto.setCallerPhone(incident.getCallerPhone());

        List<ReportDto> reportDtoList = incident.getReports().stream().map(ReportConverter::convertToDto).collect(Collectors.toList());
        List<UserDto> userDtoList = incident.getReceivers().stream().map(UserConverter::convertToDto).collect(Collectors.toList());

        incidentDto.setReceivers(userDtoList);
        incidentDto.setReports(reportDtoList);

        incidentDto.setLatitude(incident.getLatitude());
        incidentDto.setLongitude(incident.getLongitude());

        return incidentDto;
    }

    public static Incident convert(IncidentDto incidentDto)  {

        Incident incident = new Incident();
        incident.setCoordinator(userServiceStatic.findById(incidentDto.getCoordinatorId()));
        incident.setId(incidentDto.getIncidentId());
        incident.setTitle(incidentDto.getTitle());
        incident.setLastUpdate(incidentDto.getLastUpdate());
        incident.setAuthority(authorityServiceStatic.findById(incidentDto.getAuthorityId()));
        incident.setImportance(importanceServiceStatic.findById(incidentDto.getImportanceId()));

        incident.setNumber(incidentDto.getNumber());
        incident.setRegion(incidentDto.getRegion());
        incident.setStreet(incidentDto.getStreet());
        incident.setPostalCode(incidentDto.getPostalCode());

        incident.setNotes(incidentDto.getNotes());
        incident.setStatus(statusServiceStatic.findById(incidentDto.getStatusId()));

        incident.setCallerFirstName(incidentDto.getCallerFirstName());
        incident.setCallerLastName(incidentDto.getCallerLastName());
        incident.setCallerNationalId(incidentDto.getCallerNationalId());
        incident.setCallerPhone(incidentDto.getCallerPhone());

        incident.setLatitude(incidentDto.getLatitude());
        incident.setLongitude(incidentDto.getLongitude());

        // Den ta exw dei akoma, asta etsi pros to paron
        incident.setReceivers(new ArrayList<User>()); // Maybe will be changed, check it again. Without it NullPointerException at Post Incident
        incident.setReports(new ArrayList<Report>()); // Maybe will be changed, check it again. Without it NullPointerException at Post Incident
        return incident;
    }

}
