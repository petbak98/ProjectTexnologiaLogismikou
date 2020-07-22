package com.controlroom.Application.model.userModel;

import com.controlroom.Application.model.incidentModel.Authority;
import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.reportModel.Report;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.*;

@Getter
@Setter
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private long id;

    @NotBlank
    @Size(max = 20)
    private String username;

    private String firstName;
    private String lastName;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(max = 120)
    private String password;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(	name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @OneToMany(mappedBy = "coordinator", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Incident> myIncidents;

    private double latitude;

    private double longitude;

    @ManyToOne
    @JoinColumn(name ="authority_id", nullable = false)
    private Authority authority;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable (
            name = "incident_user",
            inverseJoinColumns = @JoinColumn(name = "incident_id"),
            joinColumns = @JoinColumn(name = "user_id"),
            foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT)
    )
    private List<Incident> incidents;

    @OneToMany(mappedBy = "user" ,fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Report> reports;

    @CreationTimestamp
    private Date lastNewIncident;

    public User() {
    }

    public User(String username, String firstName, String lastName, String email, String password, double latitude, double longitude, long authority) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public List<Incident> getMyIncidents() {
        return myIncidents;
    }

    public void setMyIncidents(List<Incident> myIncidents) {
        this.myIncidents = myIncidents;
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

    public Authority getAuthority() {
        return authority;
    }

    public void setAuthority(Authority authority) {
        this.authority = authority;
    }

    public List<Incident> getIncidents() {
        return incidents;
    }

    public void setIncidents(List<Incident> incidents) {
        this.incidents = incidents;
    }

    public List<Report> getReports() {
        return reports;
    }

    public void setReports(List<Report> reports) {
        this.reports = reports;
    }
}