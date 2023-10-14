package padawan_api.usuario;

public record DadosListagemUsuario(
        Long id,
        String username) {

    public DadosListagemUsuario(Usuario usuario){
        this(usuario.getId(), usuario.getUsername());
    }
}
