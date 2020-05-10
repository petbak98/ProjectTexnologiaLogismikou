package com.controlroom.Application.service;

import org.springframework.dao.DataRetrievalFailureException;


public interface HealthCheckService {


    void healthCheck() throws DataRetrievalFailureException;
}
