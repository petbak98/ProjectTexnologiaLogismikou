package com.controlroom.Application.model.reportModel;

import lombok.Data;

@Data
public class ReportDto {
    private long reportId;
    private String content;
    private long userId;
    private long incidentId;
}
