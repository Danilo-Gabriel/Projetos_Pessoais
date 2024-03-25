package padawan_api.model.usuario.dto;

public record AtualizarRegistroDeUsuariosDTO(
    
Long id,

String nomeLogin,

String nomeCompleto,

String email,

boolean ativo
) {
    
}
