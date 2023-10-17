package padawan_api.controller;


import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import padawan_api.domain.usuario.DadosValidarUsuario;
import padawan_api.domain.usuario.UsuarioRepository;

@RestController
@RequestMapping("/auth")
public class LoginController {


    @Autowired
    UsuarioRepository repository;
    @PostMapping("/login")
    public void login(@RequestBody @Valid DadosValidarUsuario dados){
       var usuario = repository.getReferenceById(dados.id());

       usuario.validarUsuario(dados);
    }
}
