package com.controlroom.Application.model.dto;

import lombok.Data;

@Data
public class StatusDto {
    private long id;
    private String statusName;
    private IncidentDto incident;
}
