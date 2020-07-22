package com.controlroom.Application.controller;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.userModel.User;
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

import java.security.Principal;

import static com.controlroom.Application.util.Helpers.convertToJson;


@CrossOrigin(origins = "*", maxAge = 3600)
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
    public ResponseEntity<String> commonIncidents(Principal principal) throws JsonProcessingException {
        User user = userService.findByUsername(principal.getName());

        if(user.getRoles().stream().findFirst().isPresent()) {
            if (user.getRoles().stream().findFirst().get().getName().toString().equals("ROLE_USER"))
                return ResponseEntity.ok().body(convertToJson(incidentService.findAllByDistance(user.getId())));
            else if(user.getRoles().stream().findFirst().get().getName().toString().equals("ROLE_MODERATOR"))
                return ResponseEntity.ok().body(convertToJson(incidentService.findAllActiveIncidents()));
            else
                return ResponseEntity.ok().body(convertToJson(incidentService.findAll()));
        }
        else
            return ResponseEntity.ok().body("{\"Status\": \"User Not Found\"}");
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
    public ResponseEntity<String> createIncident(@RequestBody IncidentDto incidentDto, Principal principal) throws Exception {
        User user = userService.findByUsername(principal.getName());

        if(user.getRoles().stream().findFirst().isPresent()) {
            if (user.getRoles().stream().findFirst().get().getName().toString().equals("ROLE_USER"))
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"Status\": \"User is Unauthorised\"}");
            else
                return ResponseEntity.ok().body(convertToJson(incidentService.save(incidentDto)));
        }
        else
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"Status\": \"User Not Found\"}");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateIncident(@PathVariable("id") Long id, @RequestBody @Nullable IncidentDto incidentDto,
                                                 Principal principal) throws Exception {
        if(incidentDto!=null)
                    return ResponseEntity.ok().body(convertToJson(incidentService.save(incidentDto)));
        else
            return ResponseEntity.ok().body("{\"Status\": \"Incident not found\"}");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> DeleteIncident(@PathVariable("id") Long id, Principal principal) throws JsonProcessingException {
        User user = userService.findByUsername(principal.getName());

        if(user.getRoles().stream().findFirst().isPresent()) {
            if (user.getRoles().stream().findFirst().get().getName().toString().equals("ROLE_USER"))
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"Status\": \"User is Unauthorised\"}");
            else
                incidentService.deleteById(id);
                return ResponseEntity.ok().body("{\"Status\": \"Successful Deletion\"}");
        }
        else
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"Status\": \"User Not Found\"}");
    }
}