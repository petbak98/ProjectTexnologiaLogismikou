package com.controlroom.Application.controller;

import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.repository.IncidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/incident")
public class IncidentsController {

    @Autowired
    private IncidentRepository incidentRepository;

    // == Read ==
    @GetMapping
    public List<Incident> list() {
        return incidentRepository.findAll();
    }
}
