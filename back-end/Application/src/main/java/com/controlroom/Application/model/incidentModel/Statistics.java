package com.controlroom.Application.model.incidentModel;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;


import javax.persistence.*;

@Data
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Statistics {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "statistics_Id", nullable = false)
    private long id;

    private long injuries;
    private long deaths;

    @OneToOne(fetch = FetchType.LAZY)
    private Incident incident;

}
