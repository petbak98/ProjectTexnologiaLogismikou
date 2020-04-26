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

//    @Autowired
//    private IncidentRepository incidentRepository;

//    @GetMapping
//    public List<Incident> list() {
//        return incidentRepository.findAll();
//    }
//
//    @GetMapping("{id}")
//    public Optional<Incident> show(@PathVariable String id){
//        int blogId = Integer.parseInt(id);
//        return incidentRepository.findById(blogId);
//    }

//    // == Create ==
//    @PostMapping
//    public Incident create(@RequestBody Map<String, String> body){
//         String coordinator_username = body.get("coordinator_username");
//         String title = body.get("title");
//         String authority = body.get("authority");
//         String impStr = body.get("importance");
//         int importance = Integer.parseInt(impStr);
//         String city = body.get("city");
//         String region = body.get("region");
//         String street = body.get("street");
//         String caller_firstName = body.get("caller_firstName");
//         String caller_lastName = body.get("caller_lastName");
//         String caller_nationalId = body.get("caller_nationalId");
//         String caller_phone = body.get("caller_phone");
//         String notes = body.get("notes");
//
//         return incidentRepository.save(new Incident(coordinator_username, title, authority, importance, city, region,
//                 street, caller_firstName, caller_lastName, caller_nationalId, caller_phone, notes));
//    }
}
