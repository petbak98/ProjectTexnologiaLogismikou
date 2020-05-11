package com.controlroom.Application.model.dto;

import lombok.Data;

@Data
public class ReportDto {
    private long reportId;
    private String content;
    private long userId;
    private String userName;
    private long incidentId;
}
