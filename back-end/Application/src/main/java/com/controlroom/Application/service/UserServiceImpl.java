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
        return userRepository.findByUsername(username).get();
    }

    @Override
    public UserPostDto findPostDtoByUsername(String username) {
        return UserPostConverter.convertToDto(userRepository.findByUsername(username).get());
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).get();
    }

    @Override
    public UserDto findDtoById(Long id){
        return UserConverter.convertToDto(userRepository.findById(id).get());
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
        return UserPostConverter.convertToDto(userRepository.findById(id).get());
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

    @Override
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}
