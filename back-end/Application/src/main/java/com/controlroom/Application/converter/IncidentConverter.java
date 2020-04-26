package com.controlroom.Application.converter;

import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.incidentModel.IncidentDto;

public class IncidentConverter {
    public static IncidentDto convertToDto(Incident incident) {
        IncidentDto incidentDto = new IncidentDto();
        incidentDto.setTitle(incident.getTitle());
        incidentDto.setCity(incident.getCity());
        incidentDto.setImportance(incident.getImportance());
        incidentDto.setIncidentId(incident.getIncident_id());
        incidentDto.setNotes(incident.getNotes());
        incidentDto.setReceivers(incident.getReceivers());
        incidentDto.setRegion(incident.getRegion());
        incidentDto.setStatus(incident.getStatus());
        incidentDto.setStreet(incident.getStreet());
        incidentDto.setReports(incident.getReports());
        incidentDto.setUserId(incident.getCoordinator_id());

        incidentDto.setCallerFirstName(incident.getCaller_firstName());
        incidentDto.setCallerLastName(incident.getCaller_lastName());
        incidentDto.setCallerNationalId(incident.getCaller_nationalId());
        incidentDto.setCallerPhone(incident.getCaller_phone());
        return incidentDto;
    }

    public static Incident convert(IncidentDto incidentDto) {
        Incident incident = new Incident();
        incident.setTitle(incidentDto.getTitle());
        incident.setCity(incidentDto.getCity());
        incident.setImportance(incidentDto.getImportance());
        incident.setIncident_id(incidentDto.getIncidentId());
        incident.setNotes(incidentDto.getNotes());
        incident.setReceivers(incidentDto.getReceivers());
        incident.setRegion(incidentDto.getRegion());
        incident.setStatus(incidentDto.getStatus());
        incident.setStreet(incidentDto.getStreet());
        incident.setReports(incidentDto.getReports());
        incident.setCoordinator_id(incidentDto.getUserId());

        incident.setCaller_firstName(incidentDto.getCallerFirstName());
        incident.setCaller_lastName(incidentDto.getCallerLastName());
        incident.setCaller_nationalId(incidentDto.getCallerNationalId());
        incident.setCaller_phone(incidentDto.getCallerPhone());
        return incident;
    }

}
