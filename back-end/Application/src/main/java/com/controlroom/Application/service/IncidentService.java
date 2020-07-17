package com.controlroom.Application.service;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.userModel.UserLocationIncident;

import java.util.Date;
import java.util.List;

public interface IncidentService {
    IncidentDto findDtoById(Long id) throws Exception;
    List<IncidentDto> findAll();
    List<IncidentDto> findByTitle(String title);
    List<IncidentDto> findByAuthorityId(Long id);

    Incident findById(Long id);

    IncidentDto save(IncidentDto incidentDto) throws Exception;

    List<IncidentDto> findAllByDistance(Long id); // UserLocationIncident userLocationIncident
    List<IncidentDto> returnNewIncidents(Long id, Date timestamp);

    void deleteById(Long id);
}
