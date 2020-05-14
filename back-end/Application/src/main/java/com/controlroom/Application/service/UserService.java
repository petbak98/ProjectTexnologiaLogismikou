package com.controlroom.Application.service;

import com.controlroom.Application.model.userModel.User;
import org.springframework.stereotype.Service;

public interface UserService {

    User findById(Long id);
}
