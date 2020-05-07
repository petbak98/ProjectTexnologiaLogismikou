package com.controlroom.Application.repository;

import com.controlroom.Application.model.incidentModel.Importance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "importance", path="incident-importance")
public interface ImportanceRepository extends JpaRepository<Importance, Long> {

}