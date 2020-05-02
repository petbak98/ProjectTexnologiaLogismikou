package com.controlroom.Application.converter;

import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.incidentModel.IncidentDto;

public class IncidentConverter {
    public static IncidentDto convertToDto(Incident incident) {
        IncidentDto incidentDto = new IncidentDto();

        incidentDto.setIncidentId(incident.getIncident_id());
        incidentDto.setUserId(incident.getCoordinator_id());

        incidentDto.setTitle(incident.getTitle());
        incidentDto.setAuthority(incident.getAuthority());
        incidentDto.setImportance(incident.getImportance());

        incidentDto.setCity(incident.getCity());
        incidentDto.setRegion(incident.getRegion());
        incidentDto.setStreet(incident.getStreet());
        incidentDto.setNotes(incident.getNotes());
        incidentDto.setStatus(incident.getStatus());

        incidentDto.setCallerFirstName(incident.getCaller_firstName());
        incidentDto.setCallerLastName(incident.getCaller_lastName());
        incidentDto.setCallerNationalId(incident.getCaller_nationalId());
        incidentDto.setCallerPhone(incident.getCaller_phone());


        incidentDto.setReceivers(incident.getReceivers());
        incidentDto.setReports(incident.getReports());
        return incidentDto;
    }

    public static Incident convert(IncidentDto incidentDto) {
        Incident incident = new Incident();

        incident.setIncident_id(incidentDto.getIncidentId());
        incident.setCoordinator_id(incidentDto.getUserId());

        incident.setTitle(incidentDto.getTitle());
        incident.setAuthority(incidentDto.getAuthority());
        incident.setImportance(incidentDto.getImportance());

        incident.setCity(incidentDto.getCity());
        incident.setRegion(incidentDto.getRegion());
        incident.setStreet(incidentDto.getStreet());
        incident.setNotes(incidentDto.getNotes());
        incident.setStatus(incidentDto.getStatus());

        incident.setCaller_firstName(incidentDto.getCallerFirstName());
        incident.setCaller_lastName(incidentDto.getCallerLastName());
        incident.setCaller_nationalId(incidentDto.getCallerNationalId());
        incident.setCaller_phone(incidentDto.getCallerPhone());


        incident.setReceivers(incidentDto.getReceivers());
        incident.setReports(incidentDto.getReports());
        return incident;
    }

}
