package com.controlroom.Application.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class HealthServiceTest {

    @Autowired
    private HealthCheckService healthCheckService;

    @Test
    public void testHealthCheckService() throws Exception {
        assertNotNull("The healthCheckService should not be null", healthCheckService);
    }

}