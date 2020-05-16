package com.controlroom.Application.service;

import com.controlroom.Application.model.dto.StatusDto;
import com.controlroom.Application.model.incidentModel.Status;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatusService {
    StatusDto findDtoById(Long id);
    Status findById(Long id);
    List<StatusDto> findAll();
}
