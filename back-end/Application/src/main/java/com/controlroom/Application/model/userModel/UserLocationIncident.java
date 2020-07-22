package com.controlroom.Application.model.userModel;

import lombok.Data;

@Data
public class UserLocationIncident {
    private long userId;
    private double latitude;
    private double longitude;
}