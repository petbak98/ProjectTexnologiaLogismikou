package com.controlroom.Application.service;

import com.controlroom.Application.model.dto.IncidentDto;

import java.text.ParseException;
import java.util.Date;

public interface StatisticsService {
    int getDeaths(Date back,Date end);
    int getIncidentsForMonth(int month,int  year) throws ParseException;
}
