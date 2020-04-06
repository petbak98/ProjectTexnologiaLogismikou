package com.controlroom.Application.controller;

import com.controlroom.Application.model.Report;
import com.controlroom.Application.repository.ReportRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api")
public class ControlRoomController {

    @Autowired
    ReportRepository reportRepository;

    @GetMapping("/report")
    public List<Report> index(){
        return reportRepository.findAll();
    }

    @GetMapping("/report/{id}")
    public Optional<Report> show(@PathVariable String id){
        int blogId = Integer.parseInt(id);
        return reportRepository.findById(blogId);
    }

//    @PostMapping("/report/search")
//    public List<Report> search(@RequestBody Map<String, String> body){
//        String searchTerm = body.get("text");
//        return reportRepository.exampleTitleMethod(searchTerm);
//    }

    @PostMapping("/report")
    public Report create(@RequestBody Map<String, String> body){
        String title = body.get("title");
        String content = body.get("content");
        return reportRepository.save(new Report(title, content));
    }

    @GetMapping(value = "sendvalue/{example}")
    public ResponseEntity<String> sendGetName(@PathVariable String example) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(SerializationFeature.INDENT_OUTPUT);
        String json = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(example);
        return ResponseEntity.ok().body(json);
    }
}