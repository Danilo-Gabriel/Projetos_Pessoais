package padawan_api.model.usuario.dto;

public record RegistrarUsuarioDTO(

        String nomeCompleto,
        
        String email,

        String nomeLogin,

        String senha,

        UserRole role
        ) {
}
