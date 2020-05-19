package com.controlroom.Application.converter;

import com.controlroom.Application.model.dto.UserDto;
import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.service.AuthorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserConverter {
    @Autowired
    private AuthorityService authorityService;
    private static AuthorityService authorityServiceStatic;

    @Autowired
    public void setStatic() {
        this.authorityServiceStatic = authorityService;
    }


    public static UserDto convertToDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setUsername(user.getUsername());
        userDto.setPassword(user.getPassword());
        userDto.setLatitude(user.getLatitude());
        userDto.setLongitude(user.getLongitude());

        userDto.setAuthorityId(user.getAuthority().getId());

        return userDto;
    }

    public static User convert(UserDto userDto) {
        User user = new User();
        user.setId(userDto.getId());
        user.setUsername(userDto.getUsername());
        user.setPassword(userDto.getPassword());
        user.setLatitude(user.getLatitude());
        user.setLongitude(user.getLongitude());

        user.setAuthority(authorityServiceStatic.findById(userDto.getAuthorityId()));
        return user;
    }

}
