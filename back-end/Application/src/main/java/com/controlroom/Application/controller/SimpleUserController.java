package com.controlroom.Application.controller;

import com.controlroom.Application.model.dto.ReportDto;
import com.controlroom.Application.service.ReportService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    @GetMapping("/reports")
    public List<ReportDto> index(){
        return reportService.findAll();
    }

    @GetMapping("/report/{id}")
    public ResponseEntity<ReportDto> findById(@PathVariable("id") Long id) throws Exception {
        ReportDto reportDto = reportService.findById(id);
        return ResponseEntity.status(HttpStatus.CREATED).body(reportDto);
    }

//    @PostMapping("/report/search")
//    public List<Report> search(@RequestBody Map<String, String> body){
//        String searchTerm = body.get("text");
//        return reportRepository.exampleTitleMethod(searchTerm);
//    }

    @PostMapping("/report")
    public ReportDto create(@RequestBody ReportDto reportDto) throws Exception {
        return reportService.save(reportDto);
    }

    @GetMapping(value = "sendvalue/{example}")
    public ResponseEntity<String> sendGetName(@PathVariable String example) throws IOException {
        return ResponseEntity.ok().body(convertToJson(example));
    }


    @GetMapping("incident/{incidentId}/reports")
    public ResponseEntity<String> findReportsByIncidentId(@PathVariable("incidentId") Long incidentId) throws Exception {
        List<ReportDto> incidentDto = reportService.findAllByIncidentId(incidentId);
        return ResponseEntity.status(HttpStatus.CREATED).body(convertToJson(incidentDto));
    }
    @GetMapping("/{id}/reports")
    public List<ReportDto> findByUserId(@PathVariable("id") Long id) {

        return reportService.findByUserId(id);
    }

}
