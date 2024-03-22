package padawan_api.model.usuario.dto;


public record ReturnEfetuarLoginDTO(

        Long id,
        String login,
        String conta,
        String jwt

) {

} 