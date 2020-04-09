package com.controlroom.Application.repository;

import com.controlroom.Application.model.reportModel.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepository extends JpaRepository<Report, Integer> {

    // custom queries
    // List<Report> exampleTitleMethod(String text);

}