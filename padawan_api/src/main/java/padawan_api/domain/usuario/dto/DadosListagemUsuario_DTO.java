package padawan_api.domain.usuario.dto;

import padawan_api.domain.usuario.Usuario;

public record DadosListagemUsuario_DTO(
        Long id,
        String login, 
        boolean ativo) {

    public DadosListagemUsuario_DTO(Usuario usuario){
        this(usuario.getId(), usuario.getLogin(), usuario.getAtivo());
    }
}
