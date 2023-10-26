package padawan_api.domain.usuario.dto;

import padawan_api.domain.usuario.Usuario;

public record DadosValidarUsuario_DTO(String login, String senha) {

    public DadosValidarUsuario_DTO(Usuario usuario){
        this(usuario.getLogin(), usuario.getLogin());
    }
}


