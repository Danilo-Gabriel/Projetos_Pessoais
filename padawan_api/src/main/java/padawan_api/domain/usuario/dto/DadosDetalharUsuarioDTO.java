package padawan_api.domain.usuario.dto;

import padawan_api.domain.usuario.Usuario;

public record DadosDetalharUsuarioDTO(

    Long id,
    String login,
    String senha,
    boolean ativo

) {

    public DadosDetalharUsuarioDTO(Usuario dados){

        this(dados.getId(), dados.getLogin(), dados.getSenha(), dados.getAtivo());

    }

    
    

}

