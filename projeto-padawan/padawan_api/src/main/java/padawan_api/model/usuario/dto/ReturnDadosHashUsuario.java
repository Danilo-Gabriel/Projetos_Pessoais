package padawan_api.model.usuario.dto;

import padawan_api.model.conta.dto.UserRole;

public record ReturnDadosHashUsuario(

        Long id,
        String login,
        String conta,
        UserRole role,
        String imageBase64

) {

   
}
