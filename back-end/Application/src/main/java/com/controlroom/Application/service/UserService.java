package com.controlroom.Application.service;

import com.controlroom.Application.model.dto.UserDto;
import com.controlroom.Application.model.dto.UserPostDto;
import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.model.userModel.UserLocationIncident;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {

    User findById(Long id);
    UserDto findDtoById(Long id);
    UserPostDto findFullDtoById(Long id);

    List<UserDto> findAll();

    UserDto save(UserPostDto userPostDto);

    UserDto updateLocation(UserLocationIncident userLocationIncident);

}
