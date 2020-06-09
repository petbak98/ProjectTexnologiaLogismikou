package com.controlroom.Application.controller;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.dto.UserDto;
import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.userModel.ERole;
import com.controlroom.Application.model.userModel.Role;
import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.model.userModel.UserLocationIncident;
import com.controlroom.Application.repository.RoleRepository;
import com.controlroom.Application.service.IncidentService;
import com.controlroom.Application.service.UserService;
import com.controlroom.Application.util.Helpers;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.controlroom.Application.util.Helpers.convertToJson;

@CrossOrigin(origins = "*", maxAge = 3600)
//@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/incidents")
@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
public class IncidentsController {

    @Autowired
    private IncidentService incidentService;
    @Autowired
    private UserService userService;

    @GetMapping
    @ResponseBody
    public ResponseEntity<String> commonIncidents(@RequestBody UserLocationIncident userLocationIncident) throws JsonProcessingException {
        User user = userService.findById(userLocationIncident.getUserId());

        if(user.getRoles().stream().findFirst().isPresent()) {
            if (user.getRoles().stream().findFirst().get().getName().toString().equals("ROLE_USER")) {
                System.out.println("user");
                return ResponseEntity.ok().body(convertToJson(incidentService.findAllByDistance(userLocationIncident)));
            } else {
                System.out.println("admin or moderator");
                return ResponseEntity.ok().body(convertToJson(incidentService.findAll()));
            }
        }
        else
        {
            return ResponseEntity.ok().body("{\"Status\": \"USER NOT FOUND\"}");

        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> findById(@PathVariable("id") Long id, @RequestParam String format) throws Exception {
        IncidentDto incidentDto = incidentService.findDtoById(id);
        if(format.equals("xml"))
            return ResponseEntity.ok().body(Helpers.incidentDtoToXML(incidentDto));
        else
            return ResponseEntity.ok().body(Helpers.convertToJson(incidentDto));
    }

    @PostMapping
    public ResponseEntity<String> createIncident(@RequestBody IncidentDto incidentDto) throws Exception {
            return ResponseEntity.ok().body(convertToJson(incidentService.save(incidentDto)));
    }

    @PutMapping("/{id}") // Should be checked.
    public ResponseEntity<String> updateIncident(@PathVariable("id") Long id, @RequestBody @Nullable IncidentDto incidentDto) throws Exception {
        if(incidentDto!=null) {
            return ResponseEntity.ok().body(convertToJson(incidentService.save(incidentDto)));
        }
        else
            return ResponseEntity.ok().body("{\"Status\": \"Incident not found\"}");
    }
}
