package padawan_api.domain.usuario;

public record DadosValidarUsuario(Long id, String login, String senha) {

    public DadosValidarUsuario(Usuario usuario){
        this(usuario.getId(), usuario.getLogin(), usuario.getLogin());
    }
}


