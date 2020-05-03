package com.controlroom.Application.repository;

import com.controlroom.Application.model.reportModel.FullReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReportRepository extends JpaRepository<FullReport, Long> {

    Optional<FullReport> findById(Long id);
    List<FullReport> findAll();

//    List<Report> findAllByIncident_Id(Long id);
}