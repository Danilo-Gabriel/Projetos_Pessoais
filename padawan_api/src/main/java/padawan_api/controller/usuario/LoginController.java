package padawan_api.controller.usuario;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import padawan_api.model.usuario.dto.EfetuarLoginDTO;
import padawan_api.model.usuario.dto.ReturnEfetuarLoginDTO;
import padawan_api.model.usuario.repository.Usuario;
import padawan_api.model.usuario.services.UsuarioService;

import padawan_api.services.email.dto.EmailDTO;
import padawan_api.services.email.dto.RecupararSenhaPorEmailDTO;
import padawan_api.services.email.services.EmailService;

import padawan_api.model.usuario.dto.AlterarSenhaUsuarioLogadoDTO;


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
   public ResponseEntity<?> efetuarLoginClassController(@RequestBody EfetuarLoginDTO dados){
        
       try{

          ReturnEfetuarLoginDTO usuarioDTO; 

          usuarioDTO =  this.usuarioService.efetuarLoginClassService(dados);

          return ResponseEntity.ok().body(usuarioDTO);
  
       } catch(Exception e){

        return ResponseEntity.badRequest().body(e.getMessage());

       }

      }
    

  @PutMapping("/alterarSenha")
  public ResponseEntity<?> alterarSenhaClassController(@RequestBody AlterarSenhaUsuarioLogadoDTO dados){

    try{


     this.usuarioService.alterarSenhaClassService(dados);
      
      return ResponseEntity.ok().build();
    }catch(Exception e){

      return ResponseEntity.badRequest().body(e.getMessage());
    }
    
  }

  @PostMapping("/recuperar-senha")
    public ResponseEntity<?> recuperarSenhaPorEmailClassController(@RequestBody EmailDTO email){

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
        
       Usuario usuario = this.emailService.validarHashUsuarioClassService(hash);

        return ResponseEntity.ok().body(usuario);

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

   

    /* 
    @PostMapping("email/recuperar-senha")
    public void sendEmail(@RequestBody DadosEmailDTO email){
        emailService.sendEmail(email);
    }
    */


   }


    


