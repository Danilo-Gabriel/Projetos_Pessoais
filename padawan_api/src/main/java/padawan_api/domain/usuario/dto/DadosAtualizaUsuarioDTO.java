package padawan_api.domain.usuario.dto;


import jakarta.validation.constraints.NotBlank;
import padawan_api.domain.usuario.Usuario;

public record DadosAtualizaUsuarioDTO(

        @NotBlank
        String login,

        @NotBlank
        String senha) {


        public DadosAtualizaUsuarioDTO(Usuario usuario){
                this(usuario.getLogin(), usuario.getSenha());
        }

}


