package com.controlroom.Application.converter;

import com.controlroom.Application.model.dto.StatusDto;
import com.controlroom.Application.model.incidentModel.Status;

public class StatusConverter {

    public static StatusDto convertToDto(Status status) {
        StatusDto statusDto = new StatusDto();
        statusDto.setId(status.getId());
        statusDto.setStatusName(status.getStatusName());
//        statusDto.setIncident(status.getIncidents());
        return statusDto;
    }

    public static Status convert(StatusDto statusDto) {
        Status status = new Status();
        status.setId(statusDto.getId());
        status.setStatusName(statusDto.getStatusName());
//        status.setIncidents(statusDto.getIncident());
        return status;
    }

}
