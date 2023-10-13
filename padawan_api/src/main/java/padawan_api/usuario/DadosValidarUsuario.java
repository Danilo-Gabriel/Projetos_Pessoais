
package padawan_api.usuario;


import jakarta.validation.constraints.NotNull;

public record DadosValidarUsuario(


        @NotNull
        Long id,

        String username,

        String password) {

        public DadosValidarUsuario(Usuario usuario){
                this(usuario.getId(), usuario.getUsername(), usuario.getPassword());
        }
}
