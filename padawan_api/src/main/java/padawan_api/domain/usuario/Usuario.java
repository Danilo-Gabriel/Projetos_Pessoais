package padawan_api.domain.usuario;


import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import org.mindrot.jbcrypt.BCrypt;

import padawan_api.domain.usuario.dto.DadosAtualizaUsuarioDTO;
import padawan_api.domain.usuario.dto.DadosCadastroUsuarioDTO;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;

//import java.util.Collection;
//import java.util.List;

@Table(name = "usuarios")
@Entity(name = "Usuario")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@EqualsAndHashCode(of = "id")

public class Usuario {

//public class Usuario implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String login;
    private String senha;
    
   private Boolean ativo;

    public Usuario(DadosCadastroUsuarioDTO dados) {
        this.login = dados.login();
        this.senha = BCrypt.hashpw(dados.senha(), BCrypt.gensalt());
        this.ativo = true;
    }

    public void atualizarInformacao(DadosAtualizaUsuarioDTO dados) {
        if(dados.senha() != null){
            this.senha = BCrypt.hashpw(dados.senha(), BCrypt.gensalt());
        }
    }

    public void validarUsuario(DadosCadastroUsuarioDTO dados) throws Exception {
        
        if (dados.login() != null && dados.login().equals(this.login)) {
            if (dados.senha() != null && BCrypt.checkpw(dados.senha(), this.senha)) {
                System.out.println("LOGIN CORRETO");
            }

            else{

                throw new Exception("ERROR");
            }

        }
         else {
            throw new Exception("LOGIN INCORRETO");
        }
    }


    public void inativo(){
        this.ativo = false;
    }

    public boolean isAtivo() {
        return this.ativo;
    }




    /*
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return login;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

     */

}
