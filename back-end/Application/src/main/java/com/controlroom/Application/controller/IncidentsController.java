package com.controlroom.Application.controller;

import com.controlroom.Application.model.incidentModel.IncidentDto;
import com.controlroom.Application.service.IncidentService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.controlroom.Application.util.Helpers.convertToJson;

@RestController
@RequestMapping("/api/incident")
public class IncidentsController {

    @Autowired
    IncidentService incidentService;

    @GetMapping("/")
    public List<IncidentDto> findAll() {
        return incidentService.findAll();
    }

    @GetMapping("")
    public String findByTitle(@RequestParam("title") String bookTitle) throws JsonProcessingException {
        List<IncidentDto> incidentDtos = incidentService.findByTitle(bookTitle);
        return convertToJson(incidentDtos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> findById(@PathVariable("id") Long id) throws Exception {
//    public ResponseEntity<IncidentDto> findById(@PathVariable("id") Long incidentId) throws Exception {
        IncidentDto incidentDto = incidentService.findById(id);
        return ResponseEntity.status(HttpStatus.CREATED).body(convertToJson(incidentDto));
    }

    @PostMapping
    public String create(@RequestBody IncidentDto incidentDto) throws JsonProcessingException {
        return convertToJson(incidentService.save(incidentDto));
    }

}
