package com.controlroom.Application.service;

import com.controlroom.Application.converter.UserConverter;
import com.controlroom.Application.model.dto.UserDto;
import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {


    @Autowired
    UserRepository userRepository;

    @Override
    public User findById(Long id) {
        User user;
        user = userRepository.findById(id).get();
        return user;
    }

    @Override
    public UserDto findDtoById(Long id) throws Exception{
        User user;
        try {
            user = userRepository.findById(id).get();
        } catch (NoSuchElementException nsee) {
            throw new Exception("User not found", nsee.getCause());
        }

        return UserConverter.convertToDto(user);
    }

    @Override
    public List<UserDto> findAll() {
        return userRepository.findAll()
                .stream()
                .map(UserConverter::convertToDto)
                .collect(Collectors.toList());
    }
}
