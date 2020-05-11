package com.controlroom.Application.service;

import com.controlroom.Application.converter.IncidentConverter;
import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.incidentModel.Incident;

import com.controlroom.Application.repository.IncidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class IncidentServiceImpl implements IncidentService{

    IncidentConverter incidentConverter = new IncidentConverter();

    @Autowired
    private IncidentRepository incidentRepository;

    @Override
    public IncidentDto findDtoById(Long id) throws Exception {
        Incident incident;
        try {
            incident = incidentRepository.findById(id).get();
        } catch (NoSuchElementException nsee) {
            throw new Exception("Incident not found", nsee.getCause());
        }

        return incidentConverter.convertToDto(incident);
    }

    @Override
    public List<IncidentDto> findAll() {
        // TODO: Add null check
        return incidentRepository.findAll()
                .stream()
                .map(incidentConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<IncidentDto> findByTitle(String title) {
        return incidentRepository.findByTitleContaining(title)
                .stream()
                .map(incidentConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<IncidentDto> findByAuthorityId(Long id) {
        return incidentRepository.findByAuthorityId(id)
                .stream()
                .map(incidentConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public IncidentDto save(IncidentDto incidentDto) throws Exception {
        Incident incident = IncidentConverter.convert(incidentDto);
        incidentRepository.save(incident);
        return incidentConverter.convertToDto(incident);
    }

    @Override
    public Incident findById(Long id) {
        Incident incident;
        incident = incidentRepository.findById(id).get();
        return incident;
    }
}