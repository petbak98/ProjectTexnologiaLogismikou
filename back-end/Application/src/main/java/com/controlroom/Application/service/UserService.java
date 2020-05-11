package com.controlroom.Application.service;

import com.controlroom.Application.model.userModel.User;

public interface UserService {

    User findById(Long id);
}
