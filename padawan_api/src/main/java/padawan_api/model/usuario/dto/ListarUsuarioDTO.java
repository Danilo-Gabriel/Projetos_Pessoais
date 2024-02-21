package padawan_api.model.usuario.dto;

import padawan_api.model.usuario.repository.Usuario;

public record ListarUsuarioDTO(

        Long id,

        String nomeLogin, 

        String nomeCompleto,

        String email,

        boolean ativo,

        String conta


) {

    public ListarUsuarioDTO(Usuario usuario){
        this(usuario.getId(), usuario.getNomeLogin(),usuario.getNomeCompleto(), usuario.getEmail(), usuario.getAtivo(), (usuario.getConta() != null) ? usuario.getConta().getNomeConta() : null);
    }
}
