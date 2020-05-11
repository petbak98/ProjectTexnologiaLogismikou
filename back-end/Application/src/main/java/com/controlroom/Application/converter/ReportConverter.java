package com.controlroom.Application.converter;

import com.controlroom.Application.model.dto.ReportDto;
import com.controlroom.Application.model.reportModel.Report;
import com.controlroom.Application.repository.IncidentRepository;
import com.controlroom.Application.service.IncidentService;
import com.controlroom.Application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReportConverter {

    @Autowired
    private static IncidentService incidentService;
    @Autowired
    private static UserService userService;

    public static ReportDto convertToDto(Report report) {
        ReportDto reportDto = new ReportDto();
        reportDto.setReportId(report.getId());
        reportDto.setContent(report.getContent());
        reportDto.setIncidentId(report.getIncident().getId());
        reportDto.setUserId(report.getUser().getId());

        return reportDto;
    }

    public static Report convert(ReportDto reportDto) {
        Report report = new Report();
        report.setId(reportDto.getReportId());
        report.setContent(reportDto.getContent());
        report.setIncident(incidentService.findById(reportDto.getIncidentId()));
        report.setUser(userService.findById(reportDto.getUserId()));

        return report;
    }

}
