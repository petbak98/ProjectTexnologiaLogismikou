package com.controlroom.Application.repository;

import com.controlroom.Application.model.incidentModel.Statistics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource(collectionResourceRel = "statistics", path="incident-statistics")
public interface StatisticsRepository extends JpaRepository<Statistics, Long> {
    List<Statistics> findAll();
    Optional<Statistics> findByIncidentId(Long id);
}