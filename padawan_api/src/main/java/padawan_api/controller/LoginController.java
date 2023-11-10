package padawan_api.controller;


import jakarta.validation.Valid;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import padawan_api.domain.usuario.dto.DadosCadastroUsuarioDTO;
import padawan_api.repository.UsuarioRepository;
import padawan_api.domain.usuario.Usuario;

@RestController
@CrossOrigin(origins = ("*"))
@RequestMapping("/auth")
public class LoginController {


    @Autowired
    UsuarioRepository repository;
    @PostMapping("/login")

   public ResponseEntity<?> login(@RequestBody @Valid DadosCadastroUsuarioDTO dados){
        
       try{

        Optional<Usuario> usuario = repository.findByLogin(dados.login());
        usuario.get().validarUsuario(dados);

        return ResponseEntity.ok().body("LOGIN CORRETO");

       } catch(Exception e){

        return ResponseEntity.badRequest().body(e.getMessage());

       }


    
      }
    }
    


