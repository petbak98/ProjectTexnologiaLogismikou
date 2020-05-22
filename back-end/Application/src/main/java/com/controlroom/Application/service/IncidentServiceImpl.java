package com.controlroom.Application.service;

import com.controlroom.Application.converter.IncidentConverter;
import com.controlroom.Application.model.dto.IncidentDto;
import com.controlroom.Application.model.incidentModel.Authority;
import com.controlroom.Application.model.incidentModel.Incident;

import com.controlroom.Application.model.userModel.User;
import com.controlroom.Application.model.userModel.UserLocationIncident;
import com.controlroom.Application.repository.AuthorityRepository;
import com.controlroom.Application.repository.IncidentRepository;
import com.controlroom.Application.repository.UserRepository;
import com.controlroom.Application.util.Helpers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class IncidentServiceImpl implements IncidentService{

    IncidentConverter incidentConverter = new IncidentConverter();

    @Autowired
    private IncidentRepository incidentRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AuthorityRepository authorityRepository;

    @Override
    public IncidentDto findDtoById(Long id) throws Exception {
        Incident incident;
        try {
            incident = incidentRepository.findById(id).get();
        } catch (NoSuchElementException nsee) {
            throw new Exception("Incident not found", nsee.getCause());
        }

        return incidentConverter.convertToDto(incident);
    }

    @Override
    public List<IncidentDto> findAll() {
        // TODO: Add null check
        return incidentRepository.findAll()
                .stream()
                .map(incidentConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<IncidentDto>findAllByDistance(UserLocationIncident userLocationIncident){
        double maxDistance = 40;
        Optional<User> currentUser = userRepository.findById(userLocationIncident.getUserId());

        if(currentUser.isEmpty()){
            return Collections.emptyList();
        }
        else {
            Authority currentAuthority = currentUser.get().getAuthority();
                List<Incident> filteredIncidents =  incidentRepository.findByAuthorityId(currentAuthority.getId())
                        .stream()
                        .map(incident -> {
                            double distanceFromEachIncident = Helpers.distance(incident.getLatitude(),incident.getLongitude(), currentUser.get().getLatitude(), currentUser.get().getLongitude(), "K");
                            System.out.println("distance Between User Incident "+ distanceFromEachIncident);
                            if(distanceFromEachIncident < maxDistance)
                                return incident;
                            else
                                return null;
                        })
                        .collect(Collectors.toList());
                while (filteredIncidents.remove(null));
                if(filteredIncidents.isEmpty() || filteredIncidents==null)
                    return Collections.emptyList();
                else
                    return filteredIncidents
                        .stream()
                        .map(incidentConverter::convertToDto)
                        .collect(Collectors.toList());
        }
    }

    @Override
    public List<IncidentDto> findByTitle(String title) {
        return incidentRepository.findByTitleContaining(title)
                .stream()
                .map(incidentConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<IncidentDto> findByAuthorityId(Long id) {
        return incidentRepository.findByAuthorityId(id)
                .stream()
                .map(incidentConverter::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public IncidentDto save(IncidentDto incidentDto) throws Exception {
        Incident incident = IncidentConverter.convert(incidentDto);
        incident = incidentRepository.save(incident);
        return incidentConverter.convertToDto(incident);
    }

    @Override
    public Incident findById(Long id) {
        Incident incident;
        incident = incidentRepository.findById(id).get();
        return incident;
    }
}