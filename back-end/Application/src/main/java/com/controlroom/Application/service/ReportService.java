package com.controlroom.Application.service;

import com.controlroom.Application.model.reportModel.ReportDto;

import java.util.List;

public interface ReportService {
    ReportDto findById(Long id) throws Exception;
    List<ReportDto> findAll();

    ReportDto save(ReportDto reportDto);
}
