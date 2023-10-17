package padawan_api.controller;


import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import padawan_api.domain.usuario.*;



@RestController
@RequestMapping("/usuarios")

public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @PostMapping
    @Transactional
    public void cadastrar(@RequestBody @Valid DadosCadastroUsuario dados){

        repository.save(new Usuario(dados));


    }


    @GetMapping
    public Page<DadosListagemUsuario> listUsuario(@PageableDefault(size = 10, sort = {"id"}) Pageable paginacao){
            return repository.findAll(paginacao).map(DadosListagemUsuario::new);


            //return repository.findAllByAtivoTrue(paginacao).map(DadosListagemUsuario::new);
    }

    @PutMapping
    @Transactional
    public void atualizar(@RequestBody @Valid DadosAtualizaUsuario dados){
        var usuario = repository.getReferenceById(dados.id());

        usuario.atualizarInformacao(dados);


    }


    /*


    @DeleteMapping("/{id}")
    @Transactional
    public void excluir(@PathVariable Long id){

        repository.deleteById(id);

    }

     */



    @DeleteMapping("/{id}")
    @Transactional
    public void inativo(@PathVariable Long id){
       var usuario = repository.getReferenceById(id);
       usuario.inativo();
    }





}
