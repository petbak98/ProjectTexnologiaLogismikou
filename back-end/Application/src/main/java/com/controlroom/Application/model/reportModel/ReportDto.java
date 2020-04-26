package com.controlroom.Application.model.reportModel;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
public class ReportDto {
    private long reportId;
    private String content;
}
