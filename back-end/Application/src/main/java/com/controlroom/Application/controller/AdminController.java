package com.controlroom.Application.controller;

import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.dto.UserDto;
import com.controlroom.Application.model.dto.UserPostDto;
import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.repository.UserRepository;
import com.controlroom.Application.service.UserService;
import com.controlroom.Application.util.Helpers;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.controlroom.Application.util.Helpers.convertToJson;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")

public class AdminController {

    @Autowired
    private UserService userService;


    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> findAll(){
        return ResponseEntity.ok().body(userService.findAll());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<String> findUserById(@PathVariable("id") Long id, @RequestParam String format) throws JsonProcessingException {
        UserDto userDto = userService.findDtoById(id);
        if(format.equals("xml"))
            return ResponseEntity.ok().body(Helpers.userDtoToXML(userDto));
        else
            return ResponseEntity.ok().body(Helpers.convertToJson(userDto));
    }

    @PostMapping("/users")
    public ResponseEntity<UserDto> createUser(@RequestBody UserPostDto userPostDto){
        return ResponseEntity.ok().body(userService.save(userPostDto));
    }

    @PutMapping("/users")
    public ResponseEntity<String> updateUser(@RequestBody @Nullable UserPostDto userPostDto) throws JsonProcessingException {
        if (userPostDto != null)
            return ResponseEntity.ok().body(convertToJson(userService.save(userPostDto)));
        else
            return ResponseEntity.badRequest().body("{\"Status\": \"user not found\"}");
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> DeleteUser(@PathVariable("id") Long id) {
        //userService.deleteById(id);
        return ResponseEntity.ok().body("{\"Status\": \"Not implemented\"}");
    }


    @GetMapping("/users/{id}/full")
    public ResponseEntity<UserPostDto> findFullUserById(@PathVariable("id") Long id){
        return ResponseEntity.ok().body(userService.findFullDtoById(id));
    }
}