package padawan_api.model.usuario;


import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import padawan_api.model.usuario.dto.DadosAtualizaLoginDTO;
import padawan_api.model.usuario.dto.DadosCadastroUsuarioDTO;
import padawan_api.model.usuario.dto.DadosEfetuarLoginDTO;
import padawan_api.model.usuario.dto.DadosAtualizaSenhaDTO;

import org.mindrot.jbcrypt.BCrypt;

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

    public void atualizarUsuarioClassUsuarioJPA(DadosAtualizaLoginDTO dados) throws Exception {
        

    
        if(dados.loginAtual() != null && dados.loginAtual().equals(this.login)){
            if(dados.novoLogin() != null && !dados.novoLogin().equals(dados.loginAtual()))
                
            this.login = dados.novoLogin();
            else{
                throw new Exception(" LOGIN DEVE SER DIFERENTE QUE ATUAL, POR FAVOR PREENCHER OUTRO NOME");
            }
    
        }else{
           
            throw new Exception("LOGIN ATUAL INCORRETO");
        }
    }


    public void alterarSenhaClassUsuarioJPA(DadosAtualizaSenhaDTO dados) throws Exception {
        

            if (dados.senhaAtual() != null && BCrypt.checkpw(dados.senhaAtual(), this.senha)) {
                
                if(dados.novaSenha() != null && dados.confirmarSenha() != null && dados.novaSenha().equals(dados.confirmarSenha())){

                     this.senha = BCrypt.hashpw(dados.novaSenha(), BCrypt.gensalt());

                }else{

                    throw new Exception("DIVERGENCIAS NA NOVA SENHA E CONFIRMAÇÃO DE SENHA");
                }
            }

            else{

                throw new Exception("SENHA ATUAL INCORRETA");
            }

        
         
        
    }

    public void efetuarLoginClassUsuarioJPA(DadosEfetuarLoginDTO dados) throws Exception {
        
        if (dados.login() != null && dados.login().equals(this.login)) {
            if (dados.senha() != null && BCrypt.checkpw(dados.senha(), this.senha)) {

        
                System.out.println("LOGIN CORRETO");
            }

            else{

                throw new Exception("SENHA INCORRETA");
            }

        }
         
    }





    public void inativar(){
        this.ativo = false;
    }


    public void ativar(){
        this.ativo = true;
    }

    public boolean isSituacao(){
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
