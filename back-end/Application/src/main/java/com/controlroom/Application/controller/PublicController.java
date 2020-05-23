package com.controlroom.Application.controller;

import com.controlroom.Application.model.dto.UserDto;
import com.controlroom.Application.model.dto.UserPostDto;
import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.repository.UserRepository;
import com.controlroom.Application.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("user/{id}")
    public ResponseEntity<String> findUserById(@PathVariable("id") Long id) throws JsonProcessingException {
        return ResponseEntity.ok().body(convertToJson(userService.findDtoById(id)));
    }

    @GetMapping("user/{id}/full")
    public ResponseEntity<String> findFullUserById(@PathVariable("id") Long id) throws JsonProcessingException {
        return ResponseEntity.ok().body(convertToJson(userService.findFullDtoById(id)));
    }

    @PostMapping("user")
    public ResponseEntity<String> createUser(@RequestBody UserPostDto userPostDto) throws JsonProcessingException {
        return ResponseEntity.ok().body(convertToJson(userService.save(userPostDto)));
    }

    @PutMapping("user")
    public ResponseEntity<String> updateUser(@RequestBody UserPostDto userPostDto) throws JsonProcessingException {
        if (userPostDto != null)
        {
            return ResponseEntity.ok().body(convertToJson(userService.save(userPostDto)));
        }
        else
            return ResponseEntity.ok().body(convertToJson("{\"Status\": \"user not found\"}"));
    }

}