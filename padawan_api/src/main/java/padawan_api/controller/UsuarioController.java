package padawan_api.controller;


import jakarta.validation.Valid;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Page<DadosListagemUsuario>>  listUsuario(@PageableDefault(size = 10, sort = {"id"}) Pageable paginacao){

            Page<DadosListagemUsuario> x = repository.findAllByAtivoTrue(paginacao).map(DadosListagemUsuario::new);
            return ResponseEntity.ok(x);

        
    }

    @PutMapping
    @Transactional
    public ResponseEntity atualizar(@RequestBody @Valid DadosAtualizaUsuario dados){
        
        repository.getReferenceById(dados.id()).atualizarInformacao(dados);

        return ResponseEntity.ok().build();


    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity inativo(@PathVariable Long id){
        
        repository.getReferenceById(id).inativo();
    
        return ResponseEntity.noContent().build();
      
    }



    /*
    @DeleteMapping("/{id}")
    @Transactional
    public void excluir(@PathVariable Long id){
        repository.deleteById(id);
    }
     */

       /* 
    @GetMapping("")
    public ResponseEntity<Page<DadosListagemUsuario>>  listUsuario(@PageableDefault(size = 10, sort = {"id"}) Pageable paginacao){
            Page<DadosListagemUsuario> x = repository.findAll(paginacao).map(DadosListagemUsuario::new);

            Optional<Usuario> optUsuario = this.repository.findByLogin("123");
            if(optUsuario.isPresent()){
                Usuario usuario = optUsuario.get();
            }
            return ResponseEntity.ok(x);


            //return repository.findAllByAtivoTrue(paginacao).map(DadosListagemUsuario::new);
    }
    */







}
