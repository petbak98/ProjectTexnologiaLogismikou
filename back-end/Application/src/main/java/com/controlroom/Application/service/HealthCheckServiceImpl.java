package com.controlroom.Application.service;

import com.controlroom.Application.repository.IncidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataRetrievalFailureException;
import org.springframework.stereotype.Service;


@Service
public class HealthCheckServiceImpl implements HealthCheckService {

    @Autowired
    private IncidentRepository incidentRepository;

    public void healthCheck() throws DataRetrievalFailureException {

        try {
            incidentRepository.healthCheck();
        } catch (Exception e) {
            throw new DataRetrievalFailureException(e.getMessage(), e);
        }
    }
}
