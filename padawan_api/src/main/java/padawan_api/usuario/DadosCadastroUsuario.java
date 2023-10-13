package padawan_api.usuario;

import jakarta.validation.constraints.NotNull;

public record DadosCadastroUsuario(

        @NotNull
        String username,

        @NotNull
        String password) {
}
