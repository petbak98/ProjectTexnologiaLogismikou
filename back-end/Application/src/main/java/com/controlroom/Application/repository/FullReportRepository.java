package com.controlroom.Application.repository;

import com.controlroom.Application.model.reportModel.FullReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FullReportRepository extends JpaRepository<FullReport, Integer> {

    // custom queries
    // List<Report> exampleTitleMethod(String text);

}