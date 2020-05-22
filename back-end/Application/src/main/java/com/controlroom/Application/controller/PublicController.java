package com.controlroom.Application.controller;

import com.controlroom.Application.model.dto.UserDto;
import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.repository.UserRepository;
import com.controlroom.Application.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.controlroom.Application.util.Helpers.convertToJson;

@RestController
@RequestMapping("api/public")
public class PublicController {

    @Autowired
    private UserService userService;


    @GetMapping("test1")
    public String test1(){
        return "API Test 1";
    }

    @GetMapping("test2")
    public String test2(){
        return "API Test 2";
    }

    @GetMapping("users")
    public ResponseEntity<String> findAll() throws JsonProcessingException {
        return ResponseEntity.ok().body(convertToJson(userService.findAll()));
    }

}