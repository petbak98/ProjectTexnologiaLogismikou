package com.controlroom.Application.controller;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.dto.StatisticsDto;
import com.controlroom.Application.service.HealthCheckService;
import com.controlroom.Application.service.ResetService;
import com.controlroom.Application.service.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataRetrievalFailureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static com.controlroom.Application.util.Helpers.convertToJson;


@RestController
@RequestMapping("/api/superadmin")
public class SuperAdminController {

    @Autowired
    HealthCheckService healthCheck;

    @Autowired
    ResetService resetService;

    @Autowired
    StatisticsService statService;

    @GetMapping("/health-check")
    public String healthCheck() throws ResponseStatusException {
        try {
            healthCheck.healthCheck();
            return "{\"status\": \"ok\"}";
        }catch (DataRetrievalFailureException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Data access exception: " + e.getMessage(), e);
        }
    }

    @GetMapping("/reset")
    public String reset() {
        resetService.resetDatabase();

        return "{\"status\": \"ok\"}";
    }

    @GetMapping("/deathstats")
    public String deathstats(@RequestBody StatisticsDto statisticsDto) throws Exception {
        if (statisticsDto == null){
            return "{\"status\": \"Body not found\"}";
        }else{
            SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
            Date backDate = sdf.parse(statisticsDto.getStart());
            Date end = sdf.parse(statisticsDto.getEnd());
            int deaths = statService.getDeaths(backDate,end);
            return "{\"deaths\": "+deaths+"}\n{\"status\": \"ok\"}";
        }

    }

}
