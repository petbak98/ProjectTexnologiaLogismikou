package com.controlroom.Application.converter;

import com.controlroom.Application.model.reportModel.Report;
import com.controlroom.Application.model.reportModel.ReportDto;

public class ReportConverter {
    public static ReportDto convertToDto(Report report) {
        ReportDto reportDto = new ReportDto();
        reportDto.setReportId(report.getReport_Id());
        reportDto.setContent(report.getContent());
        return reportDto;
    }

    public static Report convert(ReportDto reportDto) {
        Report report = new Report();
        report.setReport_Id(reportDto.getReportId());
        report.setContent(reportDto.getContent());
        return report;
    }

}
