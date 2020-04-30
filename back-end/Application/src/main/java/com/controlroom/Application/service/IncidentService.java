package com.controlroom.Application.service;

import com.controlroom.Application.model.incidentModel.IncidentDto;

import java.util.List;

public interface IncidentService {
    IncidentDto findById(Long id) throws Exception;
    List<IncidentDto> findAll();
    List<IncidentDto> findByTitle(String title);

    IncidentDto save(IncidentDto incidentDto);
}
