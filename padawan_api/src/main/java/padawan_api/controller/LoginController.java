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
import padawan_api.domain.usuario.dto.DadosValidarUsuario_DTO;
import padawan_api.repository.UsuarioRepository;
import padawan_api.domain.usuario.Usuario;

@RestController
@CrossOrigin(origins = ("*"))
@RequestMapping("/auth")
public class LoginController {


    @Autowired
    UsuarioRepository repository;
    @PostMapping("/login")

    public void login(@RequestBody @Valid DadosValidarUsuario_DTO dados){
        
        Optional<Usuario> usuario = repository.findByLogin(dados.login());
        usuario.get().validarUsuario(dados);

       

      
/*
 *  public ResponseEntity<?> login(@RequestBody @Valid DadosValidarUsuario_DTO dados){
        
       try{

        Optional<Usuario> usuario = repository.findByLogin(dados.login());
        usuario.get().validarUsuario(dados);

        return ResponseEntity.ok().body("Login Correto");

       } catch(Exception e){

        System.out.println("Usuario Incorreto");
        return ResponseEntity.badRequest().body("Usuario Incorreto");

       }
       
 * 
 */
   

    
    }
}
