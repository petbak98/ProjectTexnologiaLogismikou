package com.controlroom.Application.service;

import com.controlroom.Application.model.dto.UserDto;
import com.controlroom.Application.model.userModel.User;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {

    User findById(Long id);
    UserDto findDtoById(Long id) throws Exception;

    List<UserDto> findAll();
}
