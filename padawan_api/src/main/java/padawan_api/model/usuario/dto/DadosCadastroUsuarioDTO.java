package padawan_api.model.usuario.dto;

public record DadosCadastroUsuarioDTO(

        String nome_completo,
        
        String email,

        String cpf,

        String login,

        String senha) {
}
