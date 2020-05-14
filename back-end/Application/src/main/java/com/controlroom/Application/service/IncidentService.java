package com.controlroom.Application.service;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.incidentModel.Incident;

import java.util.List;

public interface IncidentService {
    IncidentDto findDtoById(Long id) throws Exception;
    List<IncidentDto> findAll();
    List<IncidentDto> findByTitle(String title);
    List<IncidentDto> findByAuthorityId(Long id);

    Incident findById(Long id);

    IncidentDto save(IncidentDto incidentDto) throws Exception;
}
