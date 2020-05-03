package com.controlroom.Application.service;

import com.controlroom.Application.converter.ReportConverter;
import com.controlroom.Application.model.reportModel.FullReport;
import com.controlroom.Application.model.reportModel.ReportDto;
import com.controlroom.Application.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class ReportServiceImpl implements ReportService{

    @Autowired
    private ReportRepository reportRepository;

    @Override
    public ReportDto findById(Long id) throws Exception {
        FullReport report;
        try {
            report = reportRepository.findById(id).get();
        } catch (NoSuchElementException nsee) {
            throw new Exception("Report not found", nsee.getCause());
        }

        return ReportConverter.convertToDto(report);
    }

    @Override
    public List<ReportDto> findAll() {
        // TODO: Add null check
        return reportRepository.findAll()
                .stream()
                .map(ReportConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public ReportDto save(ReportDto reportDto) {
        FullReport report = ReportConverter.convert(reportDto);

        reportRepository.save(report);

        return ReportConverter.convertToDto(report);
    }
}
