package com.controlroom.Application.controller;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.dto.ReportDto;
import com.controlroom.Application.model.dto.UserDto;
import com.controlroom.Application.model.userModel.UserLocationIncident;
import com.controlroom.Application.service.IncidentService;
import com.controlroom.Application.service.ReportService;
import com.controlroom.Application.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

import static com.controlroom.Application.util.Helpers.convertToJson;

@RestController
@RequestMapping("api/user")
public class SimpleUserController {

    @Autowired
    private ReportService reportService;

    @Autowired
    private IncidentService incidentService;

    @Autowired
    private UserService userService;

    @GetMapping("/reports")
    public List<ReportDto> index(){
        return reportService.findAll();
    }

    @GetMapping("/report/{id}")
    public ResponseEntity<String> findById(@PathVariable("id") Long id) throws Exception {
        ReportDto reportDto = reportService.findById(id);
        return ResponseEntity.ok().body(convertToJson(reportDto));
    }

//    @PostMapping("/report/search")
//    public List<Report> search(@RequestBody Map<String, String> body){
//        String searchTerm = body.get("text");
//        return reportRepository.exampleTitleMethod(searchTerm);
//    }

    @PostMapping("/report")
    public ResponseEntity<String> createReport(@RequestBody ReportDto reportDto) throws Exception {
        return ResponseEntity.ok().body(convertToJson(reportService.save(reportDto)));
    }

    @PutMapping("/report")
    public ResponseEntity<String> updateReport(@RequestBody ReportDto reportDto) throws Exception {
        if(reportDto!=null) {
            return ResponseEntity.ok().body(convertToJson(reportService.save(reportDto)));
        }
        else
            return ResponseEntity.ok().body(convertToJson("{\"Status\": \"Report not found\"}"));
    }

    @GetMapping(value = "sendvalue/{example}")
    public ResponseEntity<String> sendGetName(@PathVariable String example) throws IOException {
        return ResponseEntity.ok().body(convertToJson(example));
    }

    @GetMapping("/incident/{incidentId}/reports")
    public ResponseEntity<String> findReportsByIncidentId(@PathVariable("incidentId") Long incidentId) throws Exception {
        List<ReportDto> incidentDto = reportService.findAllByIncidentId(incidentId);
        return ResponseEntity.ok().body(convertToJson(incidentDto));
    }

    @GetMapping("/{id}/reports")
    public ResponseEntity<String> findByUserId(@PathVariable("id") Long id) throws JsonProcessingException {
        return ResponseEntity.ok().body(convertToJson(reportService.findByUserId(id)));
    }

    @GetMapping("/incidents")
    @ResponseBody
    public ResponseEntity<String> postResponseController(@RequestBody UserLocationIncident userLocationIncident) throws JsonProcessingException {
        return ResponseEntity.ok().body(convertToJson(incidentService.findAllByDistance(userLocationIncident)));
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
}
