package padawan_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import padawan_api.usuario.UsuarioRepository;
import padawan_api.usuario.DadosValidarUsuario;


@RestController
@RequestMapping("login")
public class LoginController {


    @Autowired
    private UsuarioRepository repository;
    @PostMapping
    public void Login(@RequestBody DadosValidarUsuario dados){

        var usuario = repository.getReferenceById(dados.id());

        usuario.validarUsuario(dados);
    }
}


