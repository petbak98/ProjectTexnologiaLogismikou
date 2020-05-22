package com.controlroom.Application.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

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
