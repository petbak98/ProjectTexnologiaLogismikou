package com.controlroom.Application.model.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ReportDto {
    private long reportId;
    private String content;
    private long userId;
    private String userName;
    private long incidentId;
    private String incidentTitle;
    private Date lastUpdate;
}