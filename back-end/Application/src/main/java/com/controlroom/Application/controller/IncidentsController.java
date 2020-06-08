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
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.controlroom.Application.util.Helpers.convertToJson;

@CrossOrigin(origins = "*", maxAge = 3600)
//@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api")
@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
public class IncidentsController {

    @Autowired
    private IncidentService incidentService;
    @Autowired
    private UserService userService;

    @GetMapping("/incidents")
    @ResponseBody
    public ResponseEntity<String> commonIncidents(@RequestBody UserLocationIncident userLocationIncident) {
        User user = userService.findById(userLocationIncident.getUserId());

        if(user.getRoles().stream().findFirst().isPresent()) {
            if (user.getRoles().stream().findFirst().get().getName().toString().equals("ROLE_USER")) {
                System.out.println("user");
                return ResponseEntity.ok().body("{\"Status\": \"RETURNED USER INCIDENTS\"}");
            } else {
                System.out.println("admin or moderator");
                return ResponseEntity.ok().body("{\"Status\": \"RETURNED MOD INCIDENTS\"}");
            }
        }
        else
        {
            return ResponseEntity.ok().body("{\"Status\": \"USER NOT FOUND\"}");

        }
    }
}
