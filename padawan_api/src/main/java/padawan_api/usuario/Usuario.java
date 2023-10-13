package padawan_api.usuario;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.mindrot.jbcrypt.BCrypt;

@Table(name = "usuarios")
@Entity(name = "Usuario")
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;


    public Usuario(DadosCadastroUsuario dados) {
        this.username = dados.username();
        this.password = BCrypt.hashpw(dados.password(), BCrypt.gensalt());
    }


    public void validarUsuario(DadosValidarUsuario dados) {
        if (dados.username() != null && dados.username().equals(this.username)) {
            if (dados.password() != null && BCrypt.checkpw(dados.password(), this.password)) {
                System.out.println("LOGIN CORRETO");
            }
        } else {
            System.out.println("USERNAME OU SENHA INCORRETA");
        }

        //Ação logar no front depois

    }
}


