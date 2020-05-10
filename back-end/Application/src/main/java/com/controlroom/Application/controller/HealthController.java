package com.controlroom.Application.controller;

import com.controlroom.Application.service.HealthCheckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataRetrievalFailureException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequestMapping("/api/health-check")
public class HealthController {

    @Autowired
    HealthCheckService healthCheck;


    @GetMapping
    public String healthCheck() throws ResponseStatusException {

        try {
            healthCheck.healthCheck();
            return "{\"status\": \"ok\"}";
        }catch (DataRetrievalFailureException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Data access exception: " + e.getMessage(), e);
        }
    }

}
