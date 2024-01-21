package padawan_api.service.email;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import padawan_api.model.email.dto.DadosAtualizaUsuarioEmailDTO;
import padawan_api.model.email.dto.DadosEmailDTO;
import padawan_api.model.usuario.Usuario;
import padawan_api.repository.UsuarioRepository;

@Service
public class EmailService {


    @Autowired
    private UsuarioRepository repository;

    private JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender){
        this.mailSender = mailSender;
    }

    public void sendEmail(DadosEmailDTO email){
        
       // var message = new SimpleMailMessage();
       // message.setFrom("danilonascimento.dr@gmail.com");
       // message.setTo(email.to());
       // message.setSubject(email.subject());
       // message.setText(email.body());
       // mailSender.send(message);
    }

    public static String gerarSenha(){

        String[] LetrasMaius = {"A", "B", "C", "D", "E"};
        String[] LetrasMinus = {"a", "b", "c", "d", "e"};
        String[] Numeros = {"1", "2", "3", "4", "5"};
        String[] Especiais = {"*", "&", "%", "#", "$"};

        int letrasMaius  = LetrasMaius.length;
        int letrasMinus = LetrasMinus.length;
        int numeros = Numeros.length;
        int especiais = Especiais.length;

        int rand1 = (int) (Math.random() * letrasMaius);
        int rand2 = (int) (Math.random() * letrasMinus);
        int rand3 = (int) (Math.random() * numeros);
        int rand4 = (int) (Math.random() * especiais);

        return LetrasMaius[rand1] + Numeros[rand3] + LetrasMinus[rand2]  + Especiais[rand4];
    }




    public static String Criptmd5(String texto) throws Exception{
        
        MessageDigest m = MessageDigest.getInstance("MD5");
        m.reset();
        m.update(texto.getBytes("utf8"),0,texto.length());
        return new BigInteger(1,m.digest()).toString(16);
    }

     public void enviarNovaSenhaPorEmailClassService(DadosEmailDTO email) throws Exception{

        Optional<Usuario> usuarioOptional = this.repository.findByEmail(email.email());

        if(usuarioOptional.isPresent()){

            Usuario usuario = usuarioOptional.get();

            if(usuario.isSituacao()){

                String novaSenha = gerarSenha();
                
                String hash = Criptmd5(novaSenha);

        
            }
            else{
                throw new Exception("Usuário inativo, contate o administrador do sistema!");
            }

        }
        else{
            throw new Exception("Email não cadastrado, ou usuário não encontrado");
        }

    }

}