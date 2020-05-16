package com.controlroom.Application.model.userModel;

import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.reportModel.Report;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private long id;

    @OneToMany(mappedBy = "coordinator", fetch = FetchType.LAZY)
    private List<Incident> myIncidents;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    private int active;

    private String roles = "";

    private String permissions = "";

    private double latitude;
    private double longitude;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "receivers")
    private List<Incident> incidents;

    @OneToMany(mappedBy = "user" ,fetch = FetchType.LAZY)
    private List<Report> reports;

    public User(String username, String password, String roles, String permissions, double latitude, double longitude){
        this.username = username;
        this.password = password;
        this.roles = roles;
        this.permissions = permissions;
        this.active = 1;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public User(){}

    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public int getActive() {
        return active;
    }

    public String getRoles() {
        return roles;
    }

    public String getPermissions() {
        return permissions;
    }

    public List<String> getRoleList(){
        if(this.roles.length() > 0){
            return Arrays.asList(this.roles.split(","));
        }
        return new ArrayList<>();
    }

    public List<String> getPermissionList(){
        if(this.permissions.length() > 0){
            return Arrays.asList(this.permissions.split(","));
        }
        return new ArrayList<>();
    }

    public List<Incident> getIncidents() {
        return incidents;
    }

    public List<Report> getReports() {
        return reports;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }
}
