package com.controlroom.Application.repository;

import com.controlroom.Application.model.incidentModel.Statistics;
import com.controlroom.Application.model.reportModel.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(collectionResourceRel = "statistics", path="incident-statistics")
public interface StatisticsRepository extends JpaRepository<Statistics, Integer> {

    // custom queries
    // List<Report> exampleTitleMethod(String text);

}