package com.controlroom.Application.service;

import com.controlroom.Application.converter.ReportConverter;
import com.controlroom.Application.model.dto.ReportDto;
import com.controlroom.Application.model.reportModel.Report;
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
        Report report;
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
        Report report = ReportConverter.convert(reportDto);

        report = reportRepository.save(report);

        return ReportConverter.convertToDto(report);
    }

    @Override
    public List<ReportDto> findAllByIncidentId(Long id)
    {
        return reportRepository.findAllByIncidentId(id)
                .stream()
                .map(ReportConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ReportDto> findByUserId(Long id) {

        return reportRepository.findByUserId(id)
                .stream()
                .map(ReportConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteById(Long id) {
        reportRepository.deleteById(id);
    }
}