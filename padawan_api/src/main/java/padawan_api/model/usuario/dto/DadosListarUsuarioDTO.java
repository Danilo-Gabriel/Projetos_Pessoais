package padawan_api.model.usuario.dto;

import padawan_api.model.usuario.repository.Usuario;

public record DadosListarUsuarioDTO(

        Long id,
        String login, 
        boolean ativo) {

    public DadosListarUsuarioDTO(Usuario usuario){
        this(usuario.getId(), usuario.getLogin(), usuario.getAtivo());
    }
}
