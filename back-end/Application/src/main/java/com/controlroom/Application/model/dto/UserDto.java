package com.controlroom.Application.model.dto;

import com.sun.istack.NotNull;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class UserDto {
    private Long id;
    @NotNull
    @NotEmpty
    @Size(min = 2, message = "Username should have at least 2 characters")
    private String username;
    @NotNull
    @NotEmpty
    @Size(min = 5, message = "password should have at least 5 characters")
    private String password;

    public UserDto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
