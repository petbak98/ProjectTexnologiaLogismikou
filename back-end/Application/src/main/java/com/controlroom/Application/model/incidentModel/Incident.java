package com.controlroom.Application.model.incidentModel;

import com.controlroom.Application.model.reportModel.Report;
import com.controlroom.Application.model.userModel.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@ToString
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Incident {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long incident_id;

    private String coordinator_username;

    private String title;
    private String authority;
    private int importance;

    private String city;
    private String region;
    private String street;
    private String notes;
    private String status;

    private String caller_firstName;
    private String caller_lastName;
    private String caller_nationalId;
    private String caller_phone;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable (
            name = "incident_users",
            joinColumns = @JoinColumn(name = "incident_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> receivers;

    @OneToMany(mappedBy = "incident", fetch = FetchType.LAZY)
    private List<Report> reports;

    public Incident(String coordinator_username, String title, String authority, int importance, String city, String region,
                    String street, String caller_firstName, String caller_lastName, String caller_nationalId,
                    String caller_phone, String notes) {

        this.coordinator_username = coordinator_username;
        this.title = title;
        this.authority = authority;
        this.importance = importance;
        this.city = city;
        this.region = region;
        this.street = street;
        this.caller_firstName = caller_firstName;
        this.caller_lastName = caller_lastName;
        this.caller_nationalId = caller_nationalId;
        this.caller_phone = caller_phone;
        this.notes = notes;

        this.status = "Waiting for response";
    }

    public Incident() {
    }
}
