package com.controlroom.Application.model.incidentModel;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="incident_statistics")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Statistics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "statistics_Id", nullable = false)
    private long id;

    private long injuries;
    private long deaths;

    @OneToOne(fetch = FetchType.LAZY)
    private Incident incident;

}
