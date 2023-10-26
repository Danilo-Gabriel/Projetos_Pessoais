package padawan_api.domain.usuario;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.mindrot.jbcrypt.BCrypt;
import padawan_api.domain.usuario.dto.DadosAtualizaUsuario_DTO;
import padawan_api.domain.usuario.dto.DadosCadastroUsuario_DTO;
import padawan_api.domain.usuario.dto.DadosValidarUsuario_DTO;
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
@EqualsAndHashCode(of = "id")

public class Usuario {

//public class Usuario implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String login;
    private String senha;
    
   private Boolean ativo;

    public Usuario(DadosCadastroUsuario_DTO dados) {
        this.login = dados.login();
        this.senha = BCrypt.hashpw(dados.senha(), BCrypt.gensalt());
        this.ativo = true;
    }

    public void atualizarInformacao(DadosAtualizaUsuario_DTO dados) {
        if(dados.senha() != null){
            this.senha = BCrypt.hashpw(dados.senha(), BCrypt.gensalt());
        }
    }

    public void validarUsuario(DadosValidarUsuario_DTO dados) {
        if (dados.login() != null && dados.login().equals(this.login)) {
            if (dados.senha() != null && BCrypt.checkpw(dados.senha(), this.senha)) {
                System.out.println("LOGIN CORRETO");
            }
        } else {
            System.out.println("USERNAME OU SENHA INCORRETA");
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
