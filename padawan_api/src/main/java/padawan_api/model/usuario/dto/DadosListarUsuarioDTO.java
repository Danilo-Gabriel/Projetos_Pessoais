package padawan_api.model.usuario.dto;

import padawan_api.model.usuario.repository.Usuario;

public record DadosListarUsuarioDTO(

        Long id,
        String login, 
        String nome_completo,
        String email,
        String cpf,
        boolean ativo

) {

    public DadosListarUsuarioDTO(Usuario usuario){
        this(usuario.getId(), usuario.getLogin(), usuario.getNome_completo(), usuario.getEmail(), usuario.getCpf(), usuario.getAtivo());
    }
}
