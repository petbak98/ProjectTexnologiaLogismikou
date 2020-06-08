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
    public ResponseEntity<String> incidentsCalculation(@RequestBody UserLocationIncident userLocationIncident) throws JsonProcessingException {
        User user = userService.findById(userLocationIncident.getUserId());
        System.out.println(user.getRoles());
       if(user.getRoles().contains(ERole.ROLE_USER) == true){
           System.out.println("user");
       }
       else{
           System.out.println("admin or moderator");
       }

       return ResponseEntity.ok().body("{\"Status\": \"LOL\"}");
    }
}
