package com.controlroom.Application.repository;

import com.controlroom.Application.model.userModel.ERole;
import com.controlroom.Application.model.userModel.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}

