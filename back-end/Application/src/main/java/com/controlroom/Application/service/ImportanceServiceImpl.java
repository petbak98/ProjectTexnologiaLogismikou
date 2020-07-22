package com.controlroom.Application.service;

import com.controlroom.Application.model.incidentModel.Importance;
import com.controlroom.Application.repository.ImportanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImportanceServiceImpl implements ImportanceService{
    @Autowired
    ImportanceRepository importanceRepository;

    @Override
    public Importance findById(Long id) {
        return importanceRepository.findById(id).get();
    }
}