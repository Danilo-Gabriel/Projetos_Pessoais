package padawan_api.domain.usuario.dto;

import jakarta.validation.constraints.NotNull;

public record DadosCadastroUsuario_DTO(

        @NotNull
        String login,

        @NotNull
        String senha) {
}
