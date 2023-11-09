package padawan_api.domain.usuario.dto;

import padawan_api.domain.usuario.Usuario;

public record DadosInativarUsuarioDTO(
        
        String login) {
    
    public DadosInativarUsuarioDTO(Usuario usuario){
        this(usuario.getLogin());
    }

}
