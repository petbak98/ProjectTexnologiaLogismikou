package com.controlroom.Application.converter;

import com.controlroom.Application.model.dto.StatisticsDto;
import com.controlroom.Application.model.incidentModel.Statistics;
import com.controlroom.Application.service.IncidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class StatisticsConverter {
    @Autowired
    private IncidentService incidentService;
    private static IncidentService incidentServiceStatic;

    @Autowired
    public void setStatic() {
        this.incidentServiceStatic = incidentService;
    }

    public static StatisticsDto convertToDto(Statistics statistics){
        StatisticsDto statisticsDto = new StatisticsDto();
        statisticsDto.setId(statistics.getId());
        statisticsDto.setDeaths(statistics.getDeaths());
        statisticsDto.setInjuries(statistics.getInjuries());
        statisticsDto.setIncidentId(statistics.getIncident().getId());
        return statisticsDto;
    }

    public static Statistics convert(StatisticsDto statisticsDto){
        Statistics statistics = new Statistics();
        statistics.setId(statisticsDto.getId());
        statistics.setDeaths(statisticsDto.getDeaths());
        statistics.setInjuries(statisticsDto.getInjuries());
        statistics.setIncident(incidentServiceStatic.findById(statisticsDto.getIncidentId()));
        return statistics;
    }

}
