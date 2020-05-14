package com.controlroom.Application.service;

import com.controlroom.Application.converter.IncidentConverter;
import com.controlroom.Application.converter.StatusConverter;
import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.dto.StatusDto;
import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.incidentModel.Status;
import com.controlroom.Application.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class StatusServiceImpl implements StatusService{

    @Autowired
    StatusRepository statusRepository;

    @Override
    public StatusDto findDtoById(Long id)  {
        Status status;
//        try {
            status = statusRepository.findById(id).get();
//        } catch (NoSuchElementException e) {
//            throw new Exception("Status not found", e.getCause());
//        }

        return StatusConverter.convertToDto(status);
    }

    @Override
    public Status findById(Long id) {
        Status status;
//        try {
            status = statusRepository.findById(id).get();
//        } catch (NoSuchElementException e) {
//            throw new Exception("Status not found", e.getCause());
//        }

        return status;
    }

    @Override
    public List<StatusDto> findAll() {
        // TODO: Add null check
        return statusRepository.findAll()
                .stream()
                .map(StatusConverter::convertToDto)
                .collect(Collectors.toList());
    }
}
