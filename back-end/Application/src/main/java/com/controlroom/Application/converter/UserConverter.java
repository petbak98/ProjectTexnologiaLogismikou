package com.controlroom.Application.converter;

import com.controlroom.Application.model.dto.UserDto;
import com.controlroom.Application.model.userModel.User;


public class UserConverter {

    public static UserDto convertToDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setUsername(user.getUsername());
        userDto.setPassword(user.getPassword());
        return userDto;
    }

    public static User convert(UserDto userDto) {
        User user = new User();
        userDto.setId(userDto.getId());
        userDto.setUsername(userDto.getUsername());
        userDto.setPassword(userDto.getPassword());
        return user;
    }

}
