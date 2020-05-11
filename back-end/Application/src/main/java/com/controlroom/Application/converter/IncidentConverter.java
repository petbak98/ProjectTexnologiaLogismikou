package com.controlroom.Application.converter;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.service.StatusService;
import com.controlroom.Application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class IncidentConverter {
    @Autowired
    private static StatusService statusService;
    @Autowired
    private static UserService userService;

    public static IncidentDto convertToDto(Incident incident){

        IncidentDto incidentDto = new IncidentDto();

        incidentDto.setIncidentId(incident.getId());
        incidentDto.setCoordinatorId(incident.getCoordinator().getId());
        incidentDto.setCoordinatorName(incident.getCoordinator().getUsername());

//        User user = userService.findById(incidentDto.getUserId());
//        incidentDto.setUserName(user.getUsername());

        incidentDto.setTitle(incident.getTitle());
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

//        incidentDto.setReceivers(incident.getReceivers());
//        incidentDto.setReports(incident.getReports());
        return incidentDto;
    }

    public static Incident convert(IncidentDto incidentDto)  {

        Incident incident = new Incident();
        incident.setCoordinator(userService.findById(incidentDto.getCoordinatorId()));
        incident.setId(incidentDto.getIncidentId());
        incident.setTitle(incidentDto.getTitle());
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
