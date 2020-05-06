package com.controlroom.Application.model.incidentModel;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="incident_status")
public class Status {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "status_id", nullable = false)
    private long id;

    @Column(name = "status_name", nullable = false)
    private String statusName;

    @OneToMany(mappedBy="status", fetch = FetchType.LAZY)
    private List<Incident> incidents;

}
