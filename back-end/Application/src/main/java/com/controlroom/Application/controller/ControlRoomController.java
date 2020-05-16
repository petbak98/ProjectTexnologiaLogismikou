package com.controlroom.Application.controller;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.service.IncidentService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.controlroom.Application.util.Helpers.convertToJson;


@RestController
@RequestMapping("/api/admin")
public class ControlRoomController {

    @Autowired
    IncidentService incidentService;

    @GetMapping("/incidents")
    public ResponseEntity<String> findAll() throws JsonProcessingException {
        return ResponseEntity.ok().body(convertToJson(incidentService.findAll()));
    }

    @GetMapping("/incidents/authority/{id}")
    public ResponseEntity<String> findByAuthorityId(@PathVariable("id") Long id) throws JsonProcessingException {
        return ResponseEntity.ok().body(convertToJson(incidentService.findByAuthorityId(id)));
    }

    /*@GetMapping("/incident/{title}")
    public String findByTitle(@PathVariable("title") String incidentTitle) throws JsonProcessingException {
        List<IncidentDto> incidentDtos = incidentService.findByTitle(incidentTitle);
        return convertToJson(incidentDtos);
    }*/

    @GetMapping("/incident/{id}")
    public ResponseEntity<String> findById(@PathVariable("id") Long id) throws Exception {
        IncidentDto incidentDto = incidentService.findDtoById(id);
        return ResponseEntity.ok().body(convertToJson(incidentDto));
    }

    @PostMapping("/incident")
    public ResponseEntity<String> create(@RequestBody IncidentDto incidentDto) throws Exception {
        return ResponseEntity.ok().body(convertToJson(incidentService.save(incidentDto)));
    }
}
