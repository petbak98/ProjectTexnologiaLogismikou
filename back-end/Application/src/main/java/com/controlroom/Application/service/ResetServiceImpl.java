package com.controlroom.Application.service;

import com.controlroom.Application.repository.IncidentRepository;
import com.controlroom.Application.repository.ReportRepository;
import com.controlroom.Application.repository.StatisticsRepository;
import com.controlroom.Application.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResetServiceImpl implements ResetService{

    @Autowired
    IncidentRepository incidentRepository;
    @Autowired
    ReportRepository reportRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    StatisticsRepository statisticsRepository;

    @Override
    public void resetDatabase() {
        reportRepository.deleteAll();
        reportRepository.flush();

        statisticsRepository.deleteAll();
        statisticsRepository.flush();

        incidentRepository.deleteAll();
        incidentRepository.flush();

        userRepository.deleteAll();
        userRepository.flush();
    }
}