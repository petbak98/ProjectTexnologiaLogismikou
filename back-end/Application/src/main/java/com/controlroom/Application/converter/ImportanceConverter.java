package com.controlroom.Application.converter;

import com.controlroom.Application.model.dto.ImportanceDto;
import com.controlroom.Application.model.incidentModel.Importance;

public class ImportanceConverter {

    public static ImportanceDto convertToDto(Importance importance) {
        ImportanceDto importanceDto = new ImportanceDto();
        importanceDto.setId(importance.getId());
        importanceDto.setName(importance.getImportanceName());
        return importanceDto;
    }

    public static Importance convert(ImportanceDto importanceDto) {
        Importance importance = new Importance();
        importance.setId(importanceDto.getId());
        importance.setImportanceName(importanceDto.getName());
        return importance;
    }
}