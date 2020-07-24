package com.controlroom.Application.service;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.dto.StatisticsDto;
import com.controlroom.Application.model.incidentModel.Statistics;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

public interface StatisticsService {
    int getDeaths(Date back,Date end);
    int getIncidentsForMonth(int month,int  year) throws ParseException;

    List<StatisticsDto> findAll();
    StatisticsDto findByIncidentId(Long id) throws Exception;

    StatisticsDto save(StatisticsDto statisticsDto);
}
