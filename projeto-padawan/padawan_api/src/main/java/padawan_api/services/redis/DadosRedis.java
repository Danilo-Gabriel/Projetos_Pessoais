package padawan_api.services.redis;

import padawan_api.model.usuario.repository.Usuario;

public record DadosRedis(
   
Long id,

    String nomeLogin, 

    String nomeCompleto,

    String email,

    boolean ativo,

    String conta


) {

public DadosRedis(Usuario usuario){
    this(usuario.getId(), usuario.getNomeLogin(),usuario.getNomeCompleto(), usuario.getEmail(), usuario.getAtivo(), (usuario.getConta() != null) ? usuario.getConta().getNomeConta() : null);
}
}