package padawan_api.domain.usuario;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosAtualizaUsuario(
        @NotNull
        Long id,

        @NotBlank
        String login,

        @NotBlank
        String senha) {

}


