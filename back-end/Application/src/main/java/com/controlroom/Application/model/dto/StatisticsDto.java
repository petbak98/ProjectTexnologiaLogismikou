package com.controlroom.Application.model.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class StatisticsDto {
    public String getStart() {
        return start;
    }

    String start;

    public String getEnd() {
        return end;
    }

    String end;
}