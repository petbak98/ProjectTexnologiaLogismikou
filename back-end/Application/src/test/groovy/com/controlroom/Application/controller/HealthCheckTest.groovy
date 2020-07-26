package com.controlroom.Application.controller

import com.controlroom.Application.model.dto.IncidentDto
import com.controlroom.Application.repository.IncidentRepository
import com.controlroom.Application.service.HealthCheckServiceImpl
import com.controlroom.Application.service.IncidentService
import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.boot.test.context.TestConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.test.web.servlet.MockMvc
import spock.lang.Specification
import spock.lang.Shared
import spock.lang.Unroll
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

//@WebMvcTest(controllers = [ExtraFunctionsController])
//@AutoConfigureMockMvc
//@WebMvcTest
//class HealthCheckTest extends Specification {
//
//    @Autowired
//    private MockMvc mvc
//
//    def "T01. Health check status is OK"() {
//        expect: "Status is 200 and the response is 'Hello world!'"
//        mvc.perform(get("/control-center/api/health-check"))
//                .andExpect(status().isOk())
//                .andReturn()
//                .response
//                .contentAsString == "Hello world!"
//
//    }
//
//    @Autowired
//    protected MockMvc mvc
//
//    @Autowired
//    IncidentService incidentService
//
//    @Autowired
//    ObjectMapper objectMapper
//
//    @Unroll
//    def "Creation of incident should return the saved incident at creation time: #timestamp"() {
//        given:
//        Map request = [
//                    "incidentId" : 1,
//                    "coordinatorId" : 1,
//                    "coordinatorName" : "john",
//                    "title" : "testTitle",
//                    "authority" : 1,
//                    "importance" : 1,
//                    "status" : 1,
//                    "latitude" : 0.0,
//                    "longitude" : 0.0,
//                    "region" : "test",
//                    "postalCode" : "00000",
//                    "street" : "teststreet",
//                    "number" : "5",
//                    "notes" : "none",
//                    "callerFirstName" : "callerName",
//                    "callerLastName" : "callerLastName",
//                    "callerNationalId" : "greek",
//                    "callerPhone" : "2100000000",
//                    "creationTimestamp" : timestamp,
//                    "lastUpdate" : timestamp,
//                    "reports" : [ ],
//                    "receivers" : [ ]
//        ]
//
////        and:
////        incidentService.save(request as IncidentDto) >> new IncidentDto(
////        )
//
//        when:
//        def results = mvc.perform(post('/api/incidents').contentType(APPLICATION_JSON).content(toJson(request)))
//
//        then:
//        results.andExpect(status().isCreated())
//
////        and:
////        results.andExpect(jsonPath('$.title').value('testTitle'))
////        results.andExpect(jsonPath('$.coordinatorName').value('john'))
////        results.andExpect(jsonPath('$.notes').value('none'))
////        results.andExpect(jsonPath('$.callerLastName').value('callerLastName'))
//    }
//
////    @TestConfiguration
////    static class StubConfig {
////        DetachedMockFactory detachedMockFactory = new DetachedMockFactory()
////
////        @Bean
////        RegistrationService registrationService() {
////            return detachedMockFactory.Stub(RegistrationService)
////        }
////    }
//}
