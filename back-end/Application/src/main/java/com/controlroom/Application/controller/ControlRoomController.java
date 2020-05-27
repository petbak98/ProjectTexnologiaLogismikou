package com.controlroom.Application.controller;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.dto.ReportDto;
import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.service.IncidentService;
import com.controlroom.Application.service.ReportService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static com.controlroom.Application.util.Helpers.convertToJson;


@RestController
@RequestMapping("/mod")
public class ControlRoomController {

    @Autowired
    IncidentService incidentService;

    @Autowired
    ReportService reportService;

    @GetMapping("/incidents")
    public ResponseEntity<List<IncidentDto>> findAll() {
        return ResponseEntity.ok().body(incidentService.findAll());
    }

    @GetMapping("/incidents/{id}")
    public ResponseEntity<IncidentDto> findById(@PathVariable("id") Long id) throws Exception {
        IncidentDto incidentDto = incidentService.findDtoById(id);
        return ResponseEntity.ok().body(incidentDto);
    }

    @GetMapping("/incidents/authority/{id}")
    public ResponseEntity<List<IncidentDto>> findByAuthorityId(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(incidentService.findByAuthorityId(id));
    }

    @GetMapping("/incidents/{incidentId}/reports")
    public ResponseEntity<List<ReportDto>> findReportsByIncidentId(@PathVariable("incidentId") Long incidentId) {
        List<ReportDto> incidentDtoList = reportService.findAllByIncidentId(incidentId);
        return ResponseEntity.ok().body(incidentDtoList);
    }

    @GetMapping("/incidents/search/{title}")
    public ResponseEntity<List<IncidentDto>> findByTitle(@PathVariable("title") String incidentTitle){
        List<IncidentDto> incidentDtos = incidentService.findByTitle(incidentTitle);
        return ResponseEntity.ok().body(incidentDtos);
    }


    @PostMapping("/incidents")
    public ResponseEntity<IncidentDto> createIncident(@RequestBody IncidentDto incidentDto) throws Exception {
        return ResponseEntity.ok().body(incidentService.save(incidentDto));
    }

    @PutMapping("/incidents") // Should be checked.
    public ResponseEntity<String> updateIncident(@RequestBody @Nullable IncidentDto incidentDto) throws Exception {
        if(incidentDto!=null) {
            return ResponseEntity.ok().body(convertToJson(incidentService.save(incidentDto)));
        }
        else
            return ResponseEntity.ok().body("{\"Status\": \"Incident not found\"}");
    }
}
