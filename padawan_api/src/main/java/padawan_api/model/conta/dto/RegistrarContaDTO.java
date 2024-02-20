package padawan_api.model.conta.dto;

import padawan_api.model.usuario.dto.UserRole;

public record RegistrarContaDTO(

    String nomeConta,

    UserRole role
) {
}

