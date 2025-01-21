package com.annyarusova.russiantrip.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;


@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
@Table(name = "routes")
public class RouteEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "route_id")
    private Integer routeId;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "start_time", columnDefinition = "DATE", nullable = false)
    private LocalDate startTime;

    @Column(name = "end_time", columnDefinition = "DATE", nullable = false)
    private LocalDate endTime;

    @ManyToOne
    @JoinColumn(name = "type_id")
    private RouteTypeEntity routeTypeId;

    @Column(name = "access", nullable = false)
    private boolean access;

    @ManyToMany(mappedBy = "routes", cascade=CascadeType.ALL)
    private List<TripEntity> trips;
}
