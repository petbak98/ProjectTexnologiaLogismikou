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
@Table(name="incident_importance")
public class Importance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "importance_id", nullable = false)
    private long id;

    @Column(name = "importance_name", nullable = false)
    private String importanceName;

    @OneToMany(mappedBy="importance", fetch = FetchType.LAZY)
    private List<Incident> incidents;
}