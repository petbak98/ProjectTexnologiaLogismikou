package com.controlroom.Application.model.FullReport;

import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.userModel.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIgnore;

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
public class FullReport {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long report_Id;

    private long injuries;
    private long deaths;
    @OneToOne(fetch = FetchType.LAZY)
    private User adder;
    @OneToOne(fetch = FetchType.LAZY)
    private Incident incident;
    public FullReport(int deaths, int injuries, User user) {
        this.deaths = deaths;
        this.injuries = injuries;
        this.adder = user;
    }

    public FullReport(){
    }
}
