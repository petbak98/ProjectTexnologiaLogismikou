package com.controlroom.Application.converter;

import com.controlroom.Application.model.dto.StatusDto;
import com.controlroom.Application.model.incidentModel.Status;


public class StatusConverter {

    public static StatusDto convertToDto(Status status) {
        StatusDto statusDto = new StatusDto();
        statusDto.setId(status.getId());
        statusDto.setCompleted(status.getCompleted());
        return statusDto;
    }

    public static Status convert(StatusDto statusDto) {
        Status status = new Status();
        status.setId(statusDto.getId());
        status.setCompleted(statusDto.getCompleted());
        return status;
    }
}