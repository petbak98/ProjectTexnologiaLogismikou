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
    private int incident_id;

    private String coordinator_username;

    private String title;
    private String authority;

    private String city;
    private String region;
    private String street;

    private String caller_firstName;
    private String caller_lastName;
    private String caller_nationalId;
    private String caller_phone;

    private String status;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable (
            name = "incident_users",
            joinColumns = @JoinColumn(name = "incident_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> receivers;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Report> reports;

    public Incident() {
    }
}
