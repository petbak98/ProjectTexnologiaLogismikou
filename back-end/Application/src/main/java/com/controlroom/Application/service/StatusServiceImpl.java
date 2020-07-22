package com.controlroom.Application.service;

import com.controlroom.Application.converter.StatusConverter;
import com.controlroom.Application.model.dto.StatusDto;
import com.controlroom.Application.model.incidentModel.Status;
import com.controlroom.Application.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StatusServiceImpl implements StatusService{

    @Autowired
    StatusRepository statusRepository;

    @Override
    public StatusDto findDtoById(Long id)  {
        return StatusConverter.convertToDto(statusRepository.findById(id).get());
    }

    @Override
    public Status findById(Long id) {
        return statusRepository.findById(id).get();
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