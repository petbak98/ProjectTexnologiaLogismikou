package com.controlroom.Application.converter;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.dto.ReportDto;
import com.controlroom.Application.model.dto.UserDto;
import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.reportModel.Report;
import com.controlroom.Application.repository.ReportRepository;
import com.controlroom.Application.service.IncidentService;
import com.controlroom.Application.service.ReportService;
import com.controlroom.Application.service.StatusService;
import com.controlroom.Application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class IncidentConverter {
    @Autowired
    private static StatusService statusService;
    @Autowired
    private static UserService userService;
    @Autowired
    private ReportService reportService;
    @Autowired
    private ReportConverter reportConverter;

    public IncidentDto convertToDto(Incident incident) {

        IncidentDto incidentDto = new IncidentDto();

        incidentDto.setIncidentId(incident.getId());
        incidentDto.setCoordinatorId(incident.getCoordinator().getId());
        incidentDto.setCoordinatorName(incident.getCoordinator().getUsername());

//        User user = userService.findById(incidentDto.getUserId());
//        incidentDto.setUserName(user.getUsername());

        incidentDto.setTitle(incident.getTitle());
        incidentDto.setLastUpdate(incident.getLastUpdate());

        //incidentDto.setLocation(incident.getLocation());
        incidentDto.setAuthorityId(incident.getAuthority().getId());
        incidentDto.setImportanceId(incident.getImportance().getId());

        incidentDto.setCity(incident.getCity());
        incidentDto.setRegion(incident.getRegion());
        incidentDto.setStreet(incident.getStreet());
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

        return incidentDto;
    }

    public static Incident convert(IncidentDto incidentDto)  {

        Incident incident = new Incident();
        incident.setCoordinator(userService.findById(incidentDto.getCoordinatorId()));
        incident.setId(incidentDto.getIncidentId());
        incident.setTitle(incidentDto.getTitle());
        incident.setLastUpdate(incidentDto.getLastUpdate());
        //incident.setLocation(incidentDto.getLocation());
//        incident.setAuthority(incidentDto.getAuthorityId());
//        incident.setImportance(incidentDto.getImportance());

        incident.setCity(incidentDto.getCity());
        incident.setRegion(incidentDto.getRegion());
        incident.setStreet(incidentDto.getStreet());
        incident.setNotes(incidentDto.getNotes());
        incident.setStatus(statusService.findById(incidentDto.getStatusId()));

        incident.setCallerFirstName(incidentDto.getCallerFirstName());
        incident.setCallerLastName(incidentDto.getCallerLastName());
        incident.setCallerNationalId(incidentDto.getCallerNationalId());
        incident.setCallerPhone(incidentDto.getCallerPhone());

//        incident.setReceivers(incidentDto.getReceivers());
//        incident.setReports(incidentDto.getReports());
        return incident;
    }

}
