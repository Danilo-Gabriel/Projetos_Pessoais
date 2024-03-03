package padawan_api.controller.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import padawan_api.model.usuario.dto.UsuarioDTO;
import padawan_api.services.email.dto.EmailDTO;
import padawan_api.services.email.dto.RecupararSenhaPorEmailDTO;
import padawan_api.services.email.services.EmailService;

@RestController
@RequestMapping("/api/email")
public class EmailController {

        @Autowired
    private EmailService emailService;


    public EmailController(EmailService emailService){
      this.emailService = emailService;
    }

    @PostMapping("/mensagem")
    public ResponseEntity<?> enviarHashPorEmailClassController(@RequestBody EmailDTO email){

        try {

          this.emailService.enviarNovaSenhaPorEmailClassService(email);

          return ResponseEntity.ok().build();
         
        } catch (Exception e) {
          System.out.println(e.getMessage());
          return ResponseEntity.badRequest().body(e.getMessage());
        }

    
    }


    @GetMapping("{hash}")
    public ResponseEntity<?> validarHashUsuarioClassController(@PathVariable String hash){

      try {
        
       UsuarioDTO usuarioDTO = this.emailService.validarHashUsuarioClassService(hash);

        return ResponseEntity.ok().body(usuarioDTO);

      } catch (Exception e) {
          return ResponseEntity.badRequest().body(e.getMessage());
      }
     
      
    }


    @PutMapping("/recuperarSenha")
    public ResponseEntity<?> atualizarSenhaViaEmailClassController(@RequestBody RecupararSenhaPorEmailDTO dados){
      
      try {
        
        this.emailService.atualizarSenhaViaEmailClassService(dados);

        return ResponseEntity.ok().build();
      } catch (Exception e) {
       
        return ResponseEntity.badRequest().body(e.getMessage());
      }
    }

    
}
