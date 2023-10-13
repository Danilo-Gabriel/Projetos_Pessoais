package padawan_api.controller;


import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import padawan_api.usuario.*;

import java.util.List;


@RestController
@RequestMapping("usuarios")

public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @PostMapping
    @Transactional
    public void cadastrar(@RequestBody @Valid DadosCadastroUsuario dados){

    repository.save(new Usuario(dados));

    }


    @GetMapping
    public List<DadosListagemUsuario> pacienteList(){
        return repository.findAll().stream().map(DadosListagemUsuario::new).toList();
    }

    /*
    public Page<DadosListagemUsuario> usuarioList(@PageableDefault(size = 10, sort = {"nome"})Pageable paginacao){
        return repository.findAllById(paginacao).map(DadosListagemUsuario::new);
    }

     */

}
