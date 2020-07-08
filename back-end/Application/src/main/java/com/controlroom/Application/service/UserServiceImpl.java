package com.controlroom.Application.service;

import com.controlroom.Application.converter.UserConverter;
import com.controlroom.Application.converter.UserPostConverter;
import com.controlroom.Application.model.dto.UserDto;
import com.controlroom.Application.model.dto.UserPostDto;
import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.model.userModel.UserLocationIncident;
import com.controlroom.Application.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    UserConverter userConverter = new UserConverter();
    UserPostConverter userPostConverter = new UserPostConverter();

    @Autowired
    UserRepository userRepository;

    @Override
    public User findByUsername(String username) {
        User user;
        user = userRepository.findByUsername(username).get();
        return user;
    }

    @Override
    public UserPostDto findPostDtoByUsername(String username) {
        User user;
        user = userRepository.findByUsername(username).get();

        return UserPostConverter.convertToDto(user);
    }

    @Override
    public User findById(Long id) {
        User user;
        user = userRepository.findById(id).get();
        return user;
    }

    @Override
    public UserDto findDtoById(Long id){
        User user;
        /*try {*/
            user = userRepository.findById(id).get();
        /*} catch (NoSuchElementException nsee) {
            throw new Exception("User not found", nsee.getCause());
        }*/

        return UserConverter.convertToDto(user);
    }

    @Override
    public List<UserDto> findAll() {
        return userRepository.findAll()
                .stream()
                .map(UserConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public UserDto save(UserPostDto userPostDto) {
        User user = userPostConverter.convert(userPostDto);
        user = userRepository.save(user);

        return userConverter.convertToDto(user);
    }

    @Override
    public UserPostDto findFullDtoById(Long id) {
        User user;
        /*try {*/
        user = userRepository.findById(id).get();
        /*} catch (NoSuchElementException nsee) {
            throw new Exception("User not found", nsee.getCause());
        }*/

        return UserPostConverter.convertToDto(user);
    }

    @Override
    public UserDto updateLocation(UserLocationIncident userLocationIncident) {
        User currentUser = userRepository.findById(userLocationIncident.getUserId()).get();

        if(currentUser == null){
            return null;
        }
        else {
            currentUser.setLatitude(userLocationIncident.getLatitude());
            currentUser.setLongitude(userLocationIncident.getLongitude());

            userRepository.saveAndFlush(currentUser);
        }
        return userConverter.convertToDto(currentUser);
    }
}
