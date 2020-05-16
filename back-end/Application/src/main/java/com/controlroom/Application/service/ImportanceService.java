package com.controlroom.Application.service;

import com.controlroom.Application.model.incidentModel.Importance;

public interface ImportanceService {
    Importance findById(Long id);
}
