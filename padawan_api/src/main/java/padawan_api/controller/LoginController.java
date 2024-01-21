package padawan_api.controller;


import jakarta.validation.Valid;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import padawan_api.model.usuario.dto.DadosEfetuarLoginDTO;
import padawan_api.model.usuario.dto.ReturnEfetuarLoginDTO;
import padawan_api.model.email.dto.DadosEmailDTO;
import padawan_api.model.usuario.dto.DadosAtualizaSenhaDTO;
import padawan_api.service.email.*;
import padawan_api.service.usuario.UsuarioService;

@RestController
@CrossOrigin(origins = ("*"))
@RequestMapping("/auth")
public class LoginController {


    @Autowired
    UsuarioService usuarioService;

    @Autowired
    private EmailService emailService;


    public LoginController(EmailService emailService){
      this.emailService = emailService;
    }

  @PostMapping("/login")
   public ResponseEntity<?> efetuarLoginClassController(@RequestBody DadosEfetuarLoginDTO dados){
        
       try{

          ReturnEfetuarLoginDTO usuarioDTO; 

          usuarioDTO =  this.usuarioService.efetuarLoginClassService(dados);

          return ResponseEntity.ok().body(usuarioDTO);
  
       } catch(Exception e){

        return ResponseEntity.badRequest().body(e.getMessage());

       }

      }
    

  @PutMapping("/alterarSenha")
  public ResponseEntity<?> alterarSenhaClassController(@RequestBody DadosAtualizaSenhaDTO dados){

    try{


     this.usuarioService.alterarSenhaClassService(dados);
      
      return ResponseEntity.ok().build();
    }catch(Exception e){

      return ResponseEntity.badRequest().body(e.getMessage());
    }
    
  }

  @PostMapping("/recuperar-senha")
    public ResponseEntity<?> recuperarSenhaPorEmailClassController(@RequestBody DadosEmailDTO email){

        try {

          this.emailService.enviarNovaSenhaPorEmailClassService(email);

          return ResponseEntity.ok().build();
         
        } catch (Exception e) {
          System.out.println(e.getMessage());
          return ResponseEntity.badRequest().body(e.getMessage());
        }

    
    }

    /* 
    @PostMapping("email/recuperar-senha")
    public void sendEmail(@RequestBody DadosEmailDTO email){
        emailService.sendEmail(email);
    }
    */


   }


    


