package padawan_api.model.usuario.dto;

public record UsuarioDTO(

    Long id,

    String nomeLogin,

    String nomeCompleto,

    String senha,

    String email,

    String hash,

    boolean ativo


) {


}


