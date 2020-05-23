package com.controlroom.Application.service;

import com.controlroom.Application.model.dto.IncidentDto;

import java.util.Date;

public interface StatisticsService {
    int getDeaths(Date back,Date end);
}
