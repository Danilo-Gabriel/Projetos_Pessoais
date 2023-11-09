package padawan_api.domain.usuario.dto;

import padawan_api.domain.usuario.Usuario;

public record DadosListagemUsuarioDTO(
        String login, 
        boolean ativo) {

    public DadosListagemUsuarioDTO(Usuario usuario){
        this(usuario.getLogin(), usuario.getAtivo());
    }
}
