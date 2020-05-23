package com.controlroom.Application.controller;

import com.controlroom.Application.service.HealthCheckService;
import com.controlroom.Application.service.ResetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataRetrievalFailureException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequestMapping("/api/superadmin")
public class SuperAdminController {

    @Autowired
    HealthCheckService healthCheck;

    @Autowired
    ResetService resetService;

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

}
