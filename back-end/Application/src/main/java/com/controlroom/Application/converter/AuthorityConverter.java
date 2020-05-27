package com.controlroom.Application.converter;

import com.controlroom.Application.model.dto.AuthorityDto;
import com.controlroom.Application.model.incidentModel.Authority;

public class AuthorityConverter {

    public static AuthorityDto convertToDto(Authority authority) {
        AuthorityDto authorityDto = new AuthorityDto();
        authorityDto.setId(authority.getId());
        authorityDto.setName(authority.getAuthorityName());
        return authorityDto;
    }

    public static Authority convert(AuthorityDto authorityDto) {
        Authority authority = new Authority();
        authority.setId(authorityDto.getId());
        authority.setAuthorityName(authorityDto.getName());
        return authority;
    }
}
