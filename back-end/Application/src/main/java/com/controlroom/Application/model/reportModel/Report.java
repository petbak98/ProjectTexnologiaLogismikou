package com.controlroom.Application.model.reportModel;

import com.controlroom.Application.model.incidentModel.Incident;
import com.controlroom.Application.model.userModel.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="reports")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Report {

    @Id
    @Column(name = "report_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
//    @JsonIgnore()
    private Incident incident;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @Column(name = "last_updated")
    @UpdateTimestamp
    private Date lastUpdate;
}