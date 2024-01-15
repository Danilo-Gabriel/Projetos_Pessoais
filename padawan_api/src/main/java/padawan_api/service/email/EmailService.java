package padawan_api.service.email;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import padawan_api.model.email.DadosEmailDTO;

@Service
public class EmailService {

    private JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender){
        this.mailSender = mailSender;
    }

    public void sendEmail(DadosEmailDTO email){
        
        var message = new SimpleMailMessage();
        message.setFrom("danilonascimento.dr@gmail.com");
        message.setTo(email.to());
        message.setSubject(email.subjec());
        message.setText(email.body());
        mailSender.send(message);
    }
    
}