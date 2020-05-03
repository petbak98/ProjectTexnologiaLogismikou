package com.controlroom.Application.converter;

import com.controlroom.Application.model.reportModel.FullReport;
import com.controlroom.Application.model.reportModel.ReportDto;

public class ReportConverter {


   /* @Autowired
    private static UserRepository userRepository;
    @Autowired
    private static IncidentRepository incidentRepository;*/

    public static ReportDto convertToDto(FullReport report) {
        ReportDto reportDto = new ReportDto();
        reportDto.setReportId(report.getReport_Id());
        reportDto.setContent(report.getContent());

        return reportDto;
    }

    public static FullReport convert(ReportDto reportDto) {
        FullReport report = new FullReport();
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
