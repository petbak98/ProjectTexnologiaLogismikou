package com.controlroom.Application.converter;

import com.controlroom.Application.model.dto.ReportDto;
import com.controlroom.Application.model.reportModel.Report;
import com.controlroom.Application.service.IncidentService;
import com.controlroom.Application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReportConverter {

    @Autowired
    private IncidentService incidentService;
    private static IncidentService incidentServiceStatic;
    @Autowired
    private UserService userService;
    private static UserService userServiceStatic;

    @Autowired
    public void setStatic() {
        this.incidentServiceStatic = incidentService;
        this.userServiceStatic = userService;
    }

    public static ReportDto convertToDto(Report report) {
        ReportDto reportDto = new ReportDto();
        reportDto.setReportId(report.getId());
        reportDto.setLastUpdate(report.getLastUpdate());
        reportDto.setContent(report.getContent());
        reportDto.setIncidentId(report.getIncident().getId());
        reportDto.setIncidentTitle(report.getIncident().getTitle());
        reportDto.setUserId(report.getUser().getId());
        reportDto.setUserName(report.getUser().getUsername());
        return reportDto;
    }

    public static Report convert(ReportDto reportDto) {
        Report report = new Report();
        report.setId(reportDto.getReportId());
        report.setLastUpdate(reportDto.getLastUpdate());
        report.setContent(reportDto.getContent());
        report.setIncident(incidentServiceStatic.findById(reportDto.getIncidentId()));
        report.setUser(userServiceStatic.findById(reportDto.getUserId()));
        return report;
    }

}
