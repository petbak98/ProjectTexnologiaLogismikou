package com.controlroom.Application.service;

import com.controlroom.Application.model.reportModel.ReportDto;

import java.util.List;

public interface ReportService {
    ReportDto findById(Long id) throws Exception;
    List<ReportDto> findAll();

    List<ReportDto> findAllByIncidentId(Long id) throws Exception;

    ReportDto save(ReportDto reportDto);
}
