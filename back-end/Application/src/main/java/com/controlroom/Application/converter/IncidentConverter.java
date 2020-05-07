package com.controlroom.Application.converter;

import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.incidentModel.IncidentDto;

public class IncidentConverter {
    public static IncidentDto convertToDto(Incident incident) {
        IncidentDto incidentDto = new IncidentDto();

        incidentDto.setIncidentId(incident.getId());
        incidentDto.setUserId(incident.getCoordinatorId());

        incidentDto.setTitle(incident.getTitle());
        incidentDto.setAuthority(incident.getAuthority());
        incidentDto.setImportance(incident.getImportance());

        incidentDto.setCity(incident.getCity());
        incidentDto.setRegion(incident.getRegion());
        incidentDto.setStreet(incident.getStreet());
        incidentDto.setNotes(incident.getNotes());
        incidentDto.setStatus(incident.getStatus());

        incidentDto.setCallerFirstName(incident.getCallerFirstName());
        incidentDto.setCallerLastName(incident.getCallerLastName());
        incidentDto.setCallerNationalId(incident.getCallerNationalId());
        incidentDto.setCallerPhone(incident.getCallerPhone());


        incidentDto.setReceivers(incident.getReceivers());
        incidentDto.setReports(incident.getReports());
        return incidentDto;
    }

    public static Incident convert(IncidentDto incidentDto) {
        Incident incident = new Incident();

        incident.setId(incidentDto.getIncidentId());
        incident.setCoordinatorId(incidentDto.getUserId());

        incident.setTitle(incidentDto.getTitle());
        incident.setAuthority(incidentDto.getAuthority());
        incident.setImportance(incidentDto.getImportance());

        incident.setCity(incidentDto.getCity());
        incident.setRegion(incidentDto.getRegion());
        incident.setStreet(incidentDto.getStreet());
        incident.setNotes(incidentDto.getNotes());
        incident.setStatus(incidentDto.getStatus());

        incident.setCallerFirstName(incidentDto.getCallerFirstName());
        incident.setCallerLastName(incidentDto.getCallerLastName());
        incident.setCallerNationalId(incidentDto.getCallerNationalId());
        incident.setCallerPhone(incidentDto.getCallerPhone());


        incident.setReceivers(incidentDto.getReceivers());
        incident.setReports(incidentDto.getReports());
        return incident;
    }

}
