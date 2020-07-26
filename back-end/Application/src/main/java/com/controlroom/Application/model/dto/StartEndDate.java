package com.controlroom.Application.model.dto;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Data
public class StartEndDate {
    Date start;
    Date end;
}
