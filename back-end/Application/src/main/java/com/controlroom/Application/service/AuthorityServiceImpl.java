package com.controlroom.Application.service;

import com.controlroom.Application.model.incidentModel.Authority;
import com.controlroom.Application.repository.AuthorityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorityServiceImpl implements AuthorityService{
    @Autowired
    AuthorityRepository authorityRepository;

    @Override
    public Authority findById(Long id) {
        return authorityRepository.findById(id).get();
    }
}
