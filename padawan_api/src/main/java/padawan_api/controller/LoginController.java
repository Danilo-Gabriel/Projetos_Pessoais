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
import padawan_api.domain.usuario.dto.DadosCadastroUsuarioDTO;
import padawan_api.domain.usuario.dto.DadosLoginUsuarioDTO;
import padawan_api.domain.usuario.dto.TrocarSenhaLoginDTO;
import padawan_api.service.UsuarioService;

@RestController
@CrossOrigin(origins = ("*"))
@RequestMapping("/auth")
public class LoginController {


    @Autowired
    UsuarioService usuarioService;

  @PostMapping("/login")
   public ResponseEntity<?> login(@RequestBody @Valid DadosLoginUsuarioDTO dados){
        
       try{

          this.usuarioService.validarLogin(dados);
          return ResponseEntity.ok(dados);
  
       } catch(Exception e){

        return ResponseEntity.badRequest().body(e.getMessage());

       }

      }
    

  @PutMapping("/atualizarSenha")
  public ResponseEntity<?> trocarSenha(@RequestBody TrocarSenhaLoginDTO dados){

    try{

      this.usuarioService.trocarSenha(dados);

      return ResponseEntity.ok().build();
    }catch(Exception e){

      return ResponseEntity.badRequest().body(e.getMessage());
    }
    
  }


   }


    


