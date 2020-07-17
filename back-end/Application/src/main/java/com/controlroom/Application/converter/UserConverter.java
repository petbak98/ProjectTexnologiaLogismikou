package com.controlroom.Application.converter;

import com.controlroom.Application.model.dto.UserDto;
import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.service.AuthorityService;
import com.controlroom.Application.service.IncidentService;
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
        //userDto.setPassword(user.getPassword());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setLatitude(user.getLatitude());
        userDto.setLongitude(user.getLongitude());

        userDto.setAuthority(AuthorityConverter.convertToDto(user.getAuthority()));

        return userDto;
    }

    public static User convert(UserDto userDto) {
        User user = new User();
        user.setId(userDto.getId());
        user.setUsername(userDto.getUsername());
        //user.setPassword(userDto.getPassword());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setLatitude(userDto.getLatitude());
        user.setLongitude(userDto.getLongitude());

        if(userDto.getAuthority()!=null)
            user.setAuthority(authorityServiceStatic.findById(userDto.getAuthority().getId()));
        return user;
    }

}
