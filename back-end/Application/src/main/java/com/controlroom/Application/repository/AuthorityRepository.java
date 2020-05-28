package com.controlroom.Application.repository;

import com.controlroom.Application.model.incidentModel.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "authority", path="incident-authority")
public interface AuthorityRepository extends JpaRepository<Authority, Long> {

}