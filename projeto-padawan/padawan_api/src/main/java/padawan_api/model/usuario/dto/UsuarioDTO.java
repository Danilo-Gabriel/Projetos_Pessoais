package padawan_api.model.usuario.dto;

import padawan_api.model.conta.dto.UserRole;
import padawan_api.model.usuario.repository.Usuario;

public record UsuarioDTO(
    Long id,
    String nomeLogin,
    String nomeCompleto,
    String email,
    String hash,
    boolean ativo,
    UserRole role // Adicione o UserRole aqui para representar o papel do usuário
) {
    public UsuarioDTO(Usuario usuario){
        this(usuario.getId(), usuario.getNomeLogin(), usuario.getNomeCompleto(), usuario.getEmail(), usuario.getHash(), usuario.getAtivo(), (usuario.getConta() != null) ? usuario.getConta().getRole() : null);
    }
}
