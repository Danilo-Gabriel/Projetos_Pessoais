
package padawan_api.usuario;


import jakarta.validation.constraints.NotNull;

public record DadosAtualizaUsuario(
        @NotNull
        Long id,

        String username,

        String password) {

}

