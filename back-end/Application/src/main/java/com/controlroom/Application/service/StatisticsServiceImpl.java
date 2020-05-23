package com.controlroom.Application.service;


import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.incidentModel.Statistics;
import com.controlroom.Application.repository.StatisticsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class StatisticsServiceImpl implements StatisticsService {

    @Autowired
    public StatisticsRepository statisticsRepository;


    @Override
    public int getDeaths(Date back,Date end){
        int deaths = 0;
        List<Statistics> statistics =  statisticsRepository.findAll();
        for (int i = 0; i < statistics.size(); i++){
            Incident incident = statistics.get(i).getIncident();
            if (incident.getLastUpdate().compareTo(back) >= 0 && incident.getLastUpdate().compareTo(end) <= 0){
                deaths += statistics.get(i).getDeaths();
            }
        }
        return deaths;
    }
}
