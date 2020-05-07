package com.controlroom.Application.model.incidentModel;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="incident_authority")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Authority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "authority_id", nullable = false)
    private long id;

    @Column(name = "authority_name", nullable = false)
    private String authorityName;

    @OneToMany(mappedBy="authority", cascade = CascadeType.ALL)
    private List<Incident> incidents;
}
