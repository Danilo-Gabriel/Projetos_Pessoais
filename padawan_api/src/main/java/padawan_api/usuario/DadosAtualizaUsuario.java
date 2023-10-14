package padawan_api.usuario;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosAtualizaUsuario(
        @NotNull
        Long id,

        @NotBlank
        String username,

        @NotBlank
        String password) {

}


