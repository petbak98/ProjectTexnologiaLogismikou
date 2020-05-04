package com.controlroom.Application.model.incidentModel;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="authorities")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Authority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "authority_id", nullable = false)
    private long id;

    @Column(name = "authority_name", nullable = false)
    private String authorityName;

    @OneToMany(mappedBy="authority", fetch = FetchType.LAZY)
    private List<Incident> incidents;
}
