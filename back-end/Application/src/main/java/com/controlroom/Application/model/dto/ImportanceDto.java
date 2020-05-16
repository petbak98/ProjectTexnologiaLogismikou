package com.controlroom.Application.model.dto;

import lombok.Data;

@Data
public class ImportanceDto {
    private long id;

    private String importanceName;

    private IncidentDto incident;
}
