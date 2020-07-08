package com.controlroom.Application.controller;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.dto.ReportDto;
import com.controlroom.Application.model.dto.UserDto;
import com.controlroom.Application.model.dto.UserPostDto;
import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.reportModel.Report;
import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.model.userModel.UserLocationIncident;
import com.controlroom.Application.service.IncidentService;
import com.controlroom.Application.service.ReportService;
import com.controlroom.Application.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.Principal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import static com.controlroom.Application.util.Helpers.convertToJson;

@CrossOrigin(origins = "*", maxAge = 3600)
//@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/user")
@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
public class SimpleUserController {

    @Autowired
    private ReportService reportService;

    @Autowired
    private IncidentService incidentService;

    @Autowired
    private UserService userService;


    @GetMapping("/reports")
    public ResponseEntity<List<ReportDto>> index(){
        return ResponseEntity.ok().body(reportService.findAll());
    }

    @GetMapping("/reports/{id}")
    public ResponseEntity<ReportDto> findById(@PathVariable("id") Long id) throws Exception {
        ReportDto reportDto = reportService.findById(id);
        return ResponseEntity.ok().body(reportDto);
    }

    @PostMapping("/reports")
    public ResponseEntity<ReportDto> createReport(@RequestBody ReportDto reportDto){
        return ResponseEntity.ok().body(reportService.save(reportDto));
    }

    @PutMapping("/reports")
    public ResponseEntity<String> updateReport(@RequestBody @Nullable ReportDto reportDto) throws JsonProcessingException {
        if(reportDto!=null) {
            return ResponseEntity.ok().body(convertToJson(reportService.save(reportDto)));
        }
        else
            return ResponseEntity.badRequest().body("{\"Status\": \"Report not found\"}");
    }


    @GetMapping("/{id}/reports")
    public ResponseEntity<List<ReportDto>> findByUserId(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(reportService.findByUserId(id));
    }

//    @PostMapping("/report/search")
//    public List<Report> search(@RequestBody Map<String, String> body){
//        String searchTerm = body.get("text");
//        return reportRepository.exampleTitleMethod(searchTerm);
//    }


    @GetMapping("/incidents") /* Returns incidents by distance and authority of user. UserId will be changed to token */
    @ResponseBody
    public ResponseEntity<List<IncidentDto>> postResponseController(@RequestBody UserLocationIncident userLocationIncident) {
        return ResponseEntity.ok().body(incidentService.findAllByDistance(userLocationIncident.getUserId()));
    }

    @PutMapping("/update-location")
    public ResponseEntity<String> updateUserLocation(@RequestBody UserLocationIncident userLocationIncident) throws JsonProcessingException {
        UserDto userDto = userService.updateLocation(userLocationIncident);
        if (userDto == null) {
            return ResponseEntity.badRequest().body(convertToJson("{\"Status\": \"User not found\"}"));
        }
        else {
            return ResponseEntity.ok().body(convertToJson(userDto));
        }
    }

    @GetMapping("/new-incidents")
    public  ResponseEntity<String> returnNewIncidents(Principal principal) throws JsonProcessingException {
        UserPostDto userPostDto = userService.findPostDtoByUsername(principal.getName());

        List<IncidentDto> incidents = incidentService.returnNewIncidents(userPostDto.getUserId(), userPostDto.getLastNewIncident());

        if(!incidents.isEmpty()) {
            Date currentDate = new Date(System.currentTimeMillis());
            userPostDto.setLastNewIncident(currentDate);
            userService.save(userPostDto);

            System.out.println("Updated lastIncidentUpdate of User with id:" + userPostDto.getUserId());
        }

        return ResponseEntity.ok().body(convertToJson(incidents));
    }
}
