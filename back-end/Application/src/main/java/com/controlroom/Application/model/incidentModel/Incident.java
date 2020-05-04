package com.controlroom.Application.model.incidentModel;

import com.controlroom.Application.model.reportModel.Report;
import com.controlroom.Application.model.userModel.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;


import javax.persistence.*;
import java.util.List;

import static java.util.prefs.Preferences.MAX_NAME_LENGTH;

@Data
@Entity
@Table(name="incidents")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Incident {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "incident_id", nullable = false)
    private long id;

    @Column(name = "coordinator_id", nullable = false)
    private long coordinatorId;

    private String title;

    @ManyToOne (fetch = FetchType.LAZY)
    private Importance importance;

    private String city;
    private String region;
    private String street;
    private String notes;
    private String status;

    @Column(name = "caller_firstName", length = MAX_NAME_LENGTH)
    private String callerFirstName;

    @Column(name = "caller_lastName", length = MAX_NAME_LENGTH)
    private String callerLastName;

    @Column(name = "caller_nationalId")
    private String callerNationalId;

    @Column(name = "caller_phone")
    private String callerPhone;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable (
            name = "incident_user",
            joinColumns = @JoinColumn(name = "incident_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> receivers;

    @OneToMany(mappedBy = "incident", fetch = FetchType.LAZY)
    private List<Report> reports;

    @ManyToOne (fetch = FetchType.LAZY)
    private Authority authority;
}
