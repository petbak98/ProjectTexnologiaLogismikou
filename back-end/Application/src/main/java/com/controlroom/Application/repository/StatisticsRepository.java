package com.controlroom.Application.repository;

import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.incidentModel.Statistics;
import com.controlroom.Application.model.reportModel.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "statistics", path="incident-statistics")
public interface StatisticsRepository extends JpaRepository<Statistics, Long> {

    // custom queries
    // List<Report> exampleTitleMethod(String text);

    List<Statistics> findAll();

}