package padawan_api.model.usuario.services;

import padawan_api.model.usuario.repository.Usuario;

public record ListarNomeCompleto(

    Long id,

    String nomeCompleto


) {
    ListarNomeCompleto(Usuario usuario){
        this(usuario.getId(), usuario.getNomeCompleto());
    }

} 
