package com.controlroom.Application.service;

import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User findById(Long id) {
        User user;
        user = userRepository.findById(id).get();
        return user;
    }
}
