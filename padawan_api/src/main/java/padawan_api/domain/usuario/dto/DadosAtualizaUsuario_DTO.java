package padawan_api.domain.usuario.dto;


import jakarta.validation.constraints.NotBlank;
import padawan_api.domain.usuario.Usuario;

public record DadosAtualizaUsuario_DTO(

        @NotBlank
        String login,

        @NotBlank
        String senha) {


        public DadosAtualizaUsuario_DTO(Usuario usuario){
                this(usuario.getLogin(), usuario.getSenha());
        }

}


