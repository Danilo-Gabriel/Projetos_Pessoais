package padawan_api.model.usuario.dto;

public record ReturnDetalhesUsuarioDTO(

        Long id,

        String login,

        String nome_completo,
        
        String email,

        String cpf,

        boolean ativo

) {
    
}
