package com.controlroom.Application.model.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class StatisticsDto {
    private long id;
    private long injuries;
    private long deaths;
    private long incidentId;
}