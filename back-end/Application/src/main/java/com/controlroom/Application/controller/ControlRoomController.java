package com.controlroom.Application.controller;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.dto.ReportDto;
import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.service.IncidentService;
import com.controlroom.Application.service.ReportService;
import com.controlroom.Application.util.Helpers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.controlroom.Application.util.Helpers.convertToJson;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/mod")
@PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
public class ControlRoomController {

    @Autowired
    IncidentService incidentService;

    @Autowired
    ReportService reportService;

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

    @GetMapping("/reports")
    public ResponseEntity<List<ReportDto>> index(){
        return ResponseEntity.ok().body(reportService.findAll());
    }
}
