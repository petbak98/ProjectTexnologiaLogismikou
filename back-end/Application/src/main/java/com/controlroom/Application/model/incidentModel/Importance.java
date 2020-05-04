package com.controlroom.Application.model.incidentModel;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
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
