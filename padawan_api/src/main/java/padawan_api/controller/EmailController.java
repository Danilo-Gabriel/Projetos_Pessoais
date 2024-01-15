package padawan_api.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import padawan_api.model.email.DadosEmailDTO;
import padawan_api.service.email.EmailService;

@RestController
@RequestMapping("/email")
public class EmailController {

    private EmailService emailService;

    public EmailController (EmailService emailService){
        this.emailService = emailService;
    }

    @PostMapping
    public void sendEmail(@RequestBody DadosEmailDTO email){
        emailService.sendEmail(email);
    }
    
}
