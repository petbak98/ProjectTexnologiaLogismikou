package com.controlroom.Application.controller;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.dto.StatisticsDto;
import com.controlroom.Application.service.HealthCheckService;
import com.controlroom.Application.service.ResetService;
import com.controlroom.Application.service.StatisticsService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataRetrievalFailureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.constraints.Null;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static com.controlroom.Application.util.Helpers.convertToJson;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
//@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
public class ExtraFunctionsController {

    @Autowired
    HealthCheckService healthCheck;

    @Autowired
    ResetService resetService;

    @Autowired
    StatisticsService statService;

    @GetMapping("/health-check")
    public ResponseEntity <String> healthCheck() throws ResponseStatusException{
        try {
            healthCheck.healthCheck();
            return ResponseEntity.ok().body("{\"status\": \"ok\"}");
        }catch (DataRetrievalFailureException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Data access exception: " + e.getMessage(), e);
        }
    }

    @PostMapping("/reset")
    public ResponseEntity <String> reset(){
        resetService.resetDatabase();
        return ResponseEntity.ok().body("{\"status\": \"ok\"}");
    }

    @GetMapping("/deathstats")
    public String deathstats(@RequestBody @Nullable StatisticsDto statisticsDto) throws Exception {
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

    @GetMapping("/dpm/{year}")
    public String deathspermonth(@PathVariable("year") int year) throws ParseException {
        StringBuilder returnString = new StringBuilder();
        for (int i = 1; i <= 12; i++){
            switch (i){
                case 1:
                    returnString.append("{\"January\":");
                    break;
                case 2:
                    returnString.append("{\"February\":");
                    break;
                case 3:
                    returnString.append("{\"March\":");
                    break;
                case 4:
                    returnString.append("{\"April\":");
                    break;
                case 5:
                    returnString.append("{\"May\":");
                    break;
                case 6:
                    returnString.append("{\"June\":");
                    break;
                case 7:
                    returnString.append("{\"July\":");
                    break;
                case 8:
                    returnString.append("{\"August\":");
                    break;
                case 9:
                    returnString.append("{\"September\":");
                    break;
                case 10:
                    returnString.append("{\"October\":");
                    break;
                case 11:
                    returnString.append("{\"November\":");
                    break;
                case 12:
                    returnString.append("{\"December\":");
                    break;
            }

            int inc = statService.getIncidentsForMonth(i,year);
            returnString.append(inc).append("}\n");
        }
        return returnString.toString();
    }
}
