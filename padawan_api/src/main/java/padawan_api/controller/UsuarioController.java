package padawan_api.controller;


import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import padawan_api.domain.usuario.*;
import padawan_api.domain.usuario.dto.DadosAtualizaUsuario_DTO;
import padawan_api.domain.usuario.dto.DadosCadastroUsuario_DTO;
import padawan_api.domain.usuario.dto.DadosListagemUsuario_DTO;

import padawan_api.repository.UsuarioRepository;
import padawan_api.service.UsuarioService;

import java.net.URI;
import java.util.Optional;


@RestController
@CrossOrigin(origins = ("*"))
@RequestMapping("/usuarios")

public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/cadastrar")
    @Transactional
    public ResponseEntity<?> cadastrar(@RequestBody @Valid DadosCadastroUsuario_DTO dados, UriComponentsBuilder uriBuilder){

        try{
            DadosCadastroUsuario_DTO usuarioCadastrado = this.usuarioService.cadastrar(dados);
            return ResponseEntity.ok(usuarioCadastrado);
        }

        catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }


    }

    @GetMapping("/listarUsuario")
    public ResponseEntity<Page<DadosListagemUsuario_DTO>>  listUsuario(@PageableDefault(size = 10, sort = {"id"}) Pageable paginacao){
        
        Page<DadosListagemUsuario_DTO> x = repository.findAllByAtivoTrue(paginacao).map(DadosListagemUsuario_DTO::new);
        return ResponseEntity.ok(x);

            
        
    }

    @PutMapping("atualizar")
    @Transactional
    public  ResponseEntity<?> atualizar(@RequestBody @Valid DadosAtualizaUsuario_DTO dados) {

        try{
            Optional<Usuario> usuariosOptional = this.repository.findByLogin(dados.login());
    
            if (usuariosOptional.isPresent()) {
                Usuario usuario = usuariosOptional.get();
                if(usuario.isAtivo()){
                    usuario.atualizarInformacao(dados);
                    repository.save(usuario);
                    return ResponseEntity.ok(usuario);
                } else {
                    return ResponseEntity.badRequest().body("O usuário não está ativo e não pode ser atualizado.");
                }
    
            } else {
                throw new Exception("Usuário não cadastrado");
            }
        }
        catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }


    }

    @DeleteMapping("/inativar/{login}")
    @Transactional
    public ResponseEntity<?> inativo(@PathVariable String login) {

        Optional<Usuario> usuarioOptional = this.repository.findByLogin(login);

        if (usuarioOptional.isPresent()) {
            Usuario usuario = usuarioOptional.get();
            usuario.inativo();
            repository.save(usuario);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
