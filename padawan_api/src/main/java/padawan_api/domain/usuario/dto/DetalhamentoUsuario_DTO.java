package padawan_api.domain.usuario.dto;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import padawan_api.domain.usuario.Usuario;

public record DetalhamentoUsuario_DTO(
        @NotNull
        Long id,

        @NotBlank
        String login,

        @NotBlank
        String senha) {


        public DetalhamentoUsuario_DTO(Usuario usuario){
                this(usuario.getId(), usuario.getLogin(), usuario.getSenha());
        }

}


