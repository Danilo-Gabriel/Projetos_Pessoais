package padawan_api.domain.usuario;

public record DadosListagemUsuario(
        Long id,
        String login) {

    public DadosListagemUsuario(Usuario usuario){
        this(usuario.getId(), usuario.getLogin());
    }
}
