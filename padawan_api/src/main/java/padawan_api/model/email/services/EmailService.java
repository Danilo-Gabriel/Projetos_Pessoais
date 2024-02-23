package padawan_api.model.email.services;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.text.SimpleDateFormat;

import java.util.Date;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import padawan_api.model.email.dto.EmailDTO;
import padawan_api.model.email.dto.MensagemEmailDTO;
import padawan_api.model.email.dto.RecupararSenhaPorEmailDTO;
import padawan_api.model.usuario.dto.UsuarioDTO;
import padawan_api.model.usuario.repository.Usuario;
import padawan_api.model.usuario.repository.UsuarioRepository;


@Service
public class EmailService {


    @Autowired
    private UsuarioRepository repository;


   
    private JavaMailSender emailSender;

    public EmailService(JavaMailSender emailSender){
        this.emailSender = emailSender;
    }


     /* 

    public void sendEmail(DadosEmailDTO email){
        
       // var message = new SimpleMailMessage();
       // message.setFrom("danilonascimento.dr@gmail.com");
       // message.setTo(email.to());
       // message.setSubject(email.subject());
       // message.setText(email.body());
       // mailSender.send(message);
    }
    */


    /*  VALIDAÇÃO PELO HASH, MAS CASO QUEIRA TROCAR POR UM CODIGO SERÁ ESSE
     

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

     
     */
   



    public static String Criptmd5(String texto) throws Exception{
        
        MessageDigest m = MessageDigest.getInstance("MD5");
        m.reset();
        m.update(texto.getBytes("utf8"),0,texto.length());
        return new BigInteger(1,m.digest()).toString(16);
    }

     public void enviarNovaSenhaPorEmailClassService(EmailDTO email) throws Exception{

        Optional<Usuario> usuarioOptional = this.repository.findByEmail(email.email());

        if(usuarioOptional.isPresent()){

            Usuario usuario = usuarioOptional.get();

            if(usuario.isSituacao()){

                
                Date dataAtual = new Date();
                SimpleDateFormat formatoHora = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
            
                String hash = formatoHora.format(dataAtual);

                
                hash = Criptmd5(hash+usuario.getNomeLogin());

                usuario.setHash(hash);
                repository.save(usuario);
            
                // CADASTRAR ESSE HASH NO BANCO DE DADOS

                MensagemEmailDTO mensagem = new MensagemEmailDTO();
                mensagem.setHash(hash);

                var enviarEmail = new SimpleMailMessage();

                enviarEmail.setFrom(mensagem.getFrom());
                enviarEmail.setTo(email.email());
                enviarEmail.setSubject(mensagem.getSubject());
                enviarEmail.setText(mensagem.getBody()+email.url()+"/"+hash);
                emailSender.send(enviarEmail);

            }
            else{
                throw new Exception("Usuário inativo, contate o administrador do sistema!");
            }

        }
        else{
            throw new Exception("Email não cadastrado, ou usuário não encontrado");
        }

    }

    public UsuarioDTO validarHashUsuarioClassService(String hash) throws Exception{

        Optional<Usuario> usuarioOptional = this.repository.findByHash(hash);

        if(usuarioOptional.isPresent()){

            Usuario usuario = usuarioOptional.get();

            if(usuario.getAtivo()){
            
            return new UsuarioDTO(usuario);

            }else{

                throw new Exception("Usuário inativo, contate o administrador do sistema!");
            }


        }
        else{
            throw new Exception("Hash não encontrado");
        }
    }

    public void atualizarSenhaViaEmailClassService(RecupararSenhaPorEmailDTO dados) throws Exception{

        Optional<Usuario> usuarioOptional = this.repository.findByHash(dados.hash());
    

        if(usuarioOptional.isPresent()){

            Usuario usuario = usuarioOptional.get();

            usuario.atualizarSenhaViaEmailClassJPA(dados);

            repository.save(usuario);

        }
        else{
            throw new Exception("Usuário não cadastrado, contate um administrador");
        }
    }

    

}