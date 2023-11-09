package padawan_api.domain.usuario.dto;

import jakarta.validation.constraints.NotNull;

public record DadosCadastroUsuarioDTO(

        @NotNull
        String login,

        @NotNull
        String senha) {
}
