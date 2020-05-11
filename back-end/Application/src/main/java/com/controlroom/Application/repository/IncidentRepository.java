package com.controlroom.Application.repository;

import com.controlroom.Application.model.incidentModel.Incident;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import java.util.Optional;

@Repository
public interface IncidentRepository extends JpaRepository<Incident, Long> {

    List<Incident> findAll();

    Page<Incident> findAll(Pageable pageable);

    Optional<Incident> findById(Long id);

    List<Incident> findByAuthorityId(Long id);

    List<Incident> findByTitleContaining(String title);

    @Query("select 1 from Incident incident")
    void healthCheck();

}
