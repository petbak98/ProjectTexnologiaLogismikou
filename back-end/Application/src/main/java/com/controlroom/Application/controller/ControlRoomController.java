package com.controlroom.Application.controller;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.dto.ReportDto;
import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.service.IncidentService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.controlroom.Application.util.Helpers.convertToJson;


@RestController
@RequestMapping("/api/admin")
public class ControlRoomController {

    @Autowired
    IncidentService incidentService;

    @GetMapping("/incidents")
    public List<IncidentDto> findAll() {
        return incidentService.findAll();
    }

    @GetMapping("/incidents/authority/{id}")
    public List<IncidentDto> findbyAuthorityId(@PathVariable("id") Long id) {
        return incidentService.findByAuthorityId(id);
    }

    /*@GetMapping("/incident/{title}")
    public String findByTitle(@PathVariable("title") String incidentTitle) throws JsonProcessingException {
        List<IncidentDto> incidentDtos = incidentService.findByTitle(incidentTitle);
        return convertToJson(incidentDtos);
    }*/

    @GetMapping("/incident/{id}")
    public ResponseEntity<IncidentDto> findById(@PathVariable("id") Long id) throws Exception {
        IncidentDto incidentDto = incidentService.findDtoById(id);
        return ResponseEntity.status(HttpStatus.CREATED).body(incidentDto);
    }

    @PostMapping("/incident")
    public IncidentDto create(@RequestBody IncidentDto incidentDto) throws Exception {
        return incidentService.save(incidentDto);
    }
}
