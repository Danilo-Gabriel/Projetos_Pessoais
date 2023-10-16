package padawan_api.controller;


import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import padawan_api.domain.usuario.*;



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
    public ResponseEntity<Page<DadosListagemUsuario>> listUsuario(@PageableDefault(size = 10, sort = {"username"}) Pageable paginacao){
          var page = repository.findAll(paginacao).map(DadosListagemUsuario::new);

          return ResponseEntity.ok(page);
        //return repository.findAllByAtivoTrue(paginacao).map(DadosListagemUsuario::new);
    }

    @PutMapping
    @Transactional
    public ResponseEntity atualizar(@RequestBody @Valid DadosAtualizaUsuario dados){
        var usuario = repository.getReferenceById(dados.id());

        usuario.atualizarInformacao(dados);

        return ResponseEntity.ok( new DadosAtualizaUsuario(usuario));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity excluir(@PathVariable Long id){

        repository.deleteById(id);

        return ResponseEntity.noContent().build();
    }


    /*
    @DeleteMapping("/{id}")
    @Transactional
    public void inativo(@PathVariable Long id){
       var usuario = repository.getReferenceById(id);
       usuario.inativo();
    }

     */



}
