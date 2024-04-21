package padawan_api.model.usuario.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record RegistrarUsuarioDTO(

        @NotNull
        @NotBlank
        String nomeCompleto,
        
        @NotNull
        @NotBlank
        String email,

        @NotBlank
        @NotNull
        String nomeLogin,

        @NotNull
        @NotBlank
        String senha,

        String imageUrl

        ) {
}
