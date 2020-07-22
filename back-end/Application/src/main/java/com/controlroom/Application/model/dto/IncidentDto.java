package com.controlroom.Application.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;
import java.util.List;

@XmlRootElement
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class IncidentDto {
    private long incidentId;

    private long coordinatorId;
    private String coordinatorName;

    private String title;

    private AuthorityDto authority;
    private ImportanceDto importance;
    private StatusDto status;

    private double latitude;
    private double longitude;

    private String region;
    private String postalCode;
    private String street;
    private String number;

    private String notes;

    private String callerFirstName;
    private String callerLastName;
    private String callerNationalId;
    private String callerPhone;

    private Date creationTimestamp;
    private Date lastUpdate;

    private List<ReportDto> reports;
    private List<UserDto> receivers;
}
