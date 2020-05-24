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


    @GetMapping("users")
    public ResponseEntity<List<UserDto>> findAll(){
        return ResponseEntity.ok().body(userService.findAll());
    }

    @GetMapping("users/{id}")
    public ResponseEntity<UserDto> findUserById(@PathVariable("id") Long id) throws JsonProcessingException {
        return ResponseEntity.ok().body(userService.findDtoById(id));
    }

    @GetMapping("users/{id}/full")
    public ResponseEntity<UserPostDto> findFullUserById(@PathVariable("id") Long id) throws JsonProcessingException {
        return ResponseEntity.ok().body(userService.findFullDtoById(id));
    }

    @PostMapping("users")
    public ResponseEntity<UserDto> createUser(@RequestBody UserPostDto userPostDto) throws JsonProcessingException {
        return ResponseEntity.ok().body(userService.save(userPostDto));
    }

    @PutMapping("users")
    public ResponseEntity<String> updateUser(@RequestBody UserPostDto userPostDto) throws JsonProcessingException {
        if (userPostDto != null)
        {
            return ResponseEntity.ok().body(convertToJson(userService.save(userPostDto)));
        }
        else
            return ResponseEntity.ok().body(convertToJson("{\"Status\": \"user not found\"}"));
    }

}