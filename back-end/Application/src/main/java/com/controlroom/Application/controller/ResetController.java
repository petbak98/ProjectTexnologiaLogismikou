package com.controlroom.Application.controller;

import com.controlroom.Application.service.ResetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/reset")
public class ResetController {

    @Autowired
    ResetService resetService;

    @GetMapping
    public String reset() {
        resetService.resetDatabase();

        return "{\"reset\": \"done\"}";
    }

}
