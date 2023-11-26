package padawan_api.domain.usuario.dto;

import padawan_api.domain.usuario.Usuario;

public record DadosListagemUsuarioDTO(

        Long id,
        String login, 
        boolean ativo) {

    public DadosListagemUsuarioDTO(Usuario usuario){
        this(usuario.getId(), usuario.getLogin(), usuario.getAtivo());
    }
}
