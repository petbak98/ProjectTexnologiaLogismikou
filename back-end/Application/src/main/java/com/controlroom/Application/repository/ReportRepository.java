package com.controlroom.Application.repository;

import com.controlroom.Application.model.reportModel.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReportRepository extends JpaRepository<Report, Long> {
    Optional<Report> findById(Long id);
    List<Report> findAll();
    List<Report> findAllByIncidentId(Long id);

    List<Report> findByUserId(Long id);
}