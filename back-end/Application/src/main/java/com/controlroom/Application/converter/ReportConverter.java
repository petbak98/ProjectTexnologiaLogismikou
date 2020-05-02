package com.controlroom.Application.converter;

import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.reportModel.Report;
import com.controlroom.Application.model.reportModel.ReportDto;
import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.repository.IncidentRepository;
import com.controlroom.Application.repository.ReportRepository;
import com.controlroom.Application.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.NoSuchElementException;

public class ReportConverter {


   /* @Autowired
    private static UserRepository userRepository;
    @Autowired
    private static IncidentRepository incidentRepository;*/

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

        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
        /*User user = userRepository.findById(reportDto.getUserId()).get();
        report.setUser(user);*/


        /*Incident incident = incidentRepository.findById(reportDto.getIncidentId()).get();
        report.setIncident(incident);*/
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
        return report;
    }

}
