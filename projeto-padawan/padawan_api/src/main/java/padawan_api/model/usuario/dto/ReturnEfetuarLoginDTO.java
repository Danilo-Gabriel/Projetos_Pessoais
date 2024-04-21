package padawan_api.model.usuario.dto;

import padawan_api.model.conta.dto.UserRole;

public record ReturnEfetuarLoginDTO(

        Long id,
        String login,
        String conta,
        UserRole role,
        String imageUrl
) {

} 