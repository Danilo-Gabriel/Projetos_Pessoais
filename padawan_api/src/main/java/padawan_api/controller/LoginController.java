package padawan_api.controller;


import jakarta.validation.Valid;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import padawan_api.domain.usuario.dto.DadosValidarUsuario_DTO;
import padawan_api.domain.usuario.Usuario;
import padawan_api.domain.usuario.UsuarioRepository;

@RestController
@RequestMapping("/auth")
public class LoginController {


    @Autowired
    UsuarioRepository repository;
    @PostMapping("/login")
    public void login(@RequestBody @Valid DadosValidarUsuario_DTO dados){
       Optional<Usuario> usuario = repository.findByLogin(dados.login());

       usuario.get().validarUsuario(dados);
    }
}
