package com.controlroom.Application.repository;

import com.controlroom.Application.model.incidentModel.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "status", path="incident-status")
//@Repository
public interface StatusRepository extends JpaRepository<Status, Long> {

}