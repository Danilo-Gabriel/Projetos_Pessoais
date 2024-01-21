package padawan_api.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import padawan_api.service.email.EmailService;
import padawan_api.model.email.dto.DadosEmailDTO;
import padawan_api.service.email.*;;;

@RestController
@RequestMapping("/email")
public class EmailController {

    @Autowired
    private EmailService emailService;

    public EmailController (EmailService emailService){
        this.emailService = emailService;
    }

    @PostMapping("recuperar-senha")
    public void sendEmail(@RequestBody DadosEmailDTO email){
        emailService.sendEmail(email);

    }

    
}
