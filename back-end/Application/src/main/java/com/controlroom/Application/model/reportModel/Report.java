package com.controlroom.Application.model.reportModel;

import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.userModel.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter
@Setter
@ToString
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int report_id;

    private String content;


    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore()
    private Incident incident;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    public Report(String content) {
        this.content = content;
    }
    public Report() {
    }
}