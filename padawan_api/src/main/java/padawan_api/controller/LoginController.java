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
import padawan_api.model.usuario.dto.DadosAtualizaSenhaDTO;
import padawan_api.service.usuario.UsuarioService;

@RestController
@CrossOrigin(origins = ("*"))
@RequestMapping("/auth")
public class LoginController {


    @Autowired
    UsuarioService usuarioService;

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


   }


    


