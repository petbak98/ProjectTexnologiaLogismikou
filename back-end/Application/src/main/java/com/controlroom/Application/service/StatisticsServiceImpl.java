package com.controlroom.Application.service;


import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.incidentModel.Statistics;
import com.controlroom.Application.repository.StatisticsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
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
        for (Statistics statistic : statistics) {
            Incident incident = statistic.getIncident();
            if (incident.getLastUpdate().compareTo(back) >= 0 && incident.getLastUpdate().compareTo(end) <= 0) {
                deaths += statistic.getDeaths();
            }
        }
        return deaths;
    }

    public int getIncidentsForMonth(int month,int  year) throws ParseException {
        int incidents = 0;
        SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
        Date backDate = sdf.parse("01-"+month+"-"+year);
        Date endDate = sdf.parse("30-"+month+"-"+year);
        List<Statistics> statistics =  statisticsRepository.findAll();
        for (Statistics statistic : statistics) {
            Incident incident = statistic.getIncident();
            if (incident.getLastUpdate().compareTo(backDate) >= 0 && incident.getLastUpdate().compareTo(endDate) <= 0) {
                incidents++;
            }
        }
        return incidents;
    }
}
