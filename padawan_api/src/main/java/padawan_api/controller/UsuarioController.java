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
import padawan_api.domain.usuario.dto.DadosAtualizaUsuarioDTO;
import padawan_api.domain.usuario.dto.DadosCadastroUsuarioDTO;
import padawan_api.domain.usuario.dto.DadosInativarUsuarioDTO;
import padawan_api.domain.usuario.dto.DadosListagemUsuarioDTO;

import padawan_api.repository.UsuarioRepository;
import padawan_api.service.UsuarioService;


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
    public ResponseEntity<?> cadastrar(@RequestBody @Valid DadosCadastroUsuarioDTO dados){

        try{
            DadosCadastroUsuarioDTO usuarioCadastrado = this.usuarioService.cadastrar(dados);
            return ResponseEntity.ok(usuarioCadastrado);
        }

        catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }


    }

    @GetMapping("/listarUsuario")
    public ResponseEntity<Page<DadosListagemUsuarioDTO>> listUsuario(Pageable paginacao){

        try {
            Page<DadosListagemUsuarioDTO> listUsuario = this.usuarioService.listUsuario(paginacao);

            return ResponseEntity.ok(listUsuario);


        }catch (Exception e){

           ResponseEntity.<Page<DadosListagemUsuarioDTO>>badRequest().body(e.getMessage());


        }

        return null;
    }

    @PutMapping("atualizar")
    @Transactional
    public  ResponseEntity<?> atualizar(@RequestBody @Valid DadosAtualizaUsuarioDTO dados) {

        try{
           DadosAtualizaUsuarioDTO atualizarUsuario = this.usuarioService.atualizar(dados);
           return ResponseEntity.ok(dados);
        }
        catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }


    }

    @DeleteMapping("/inativar/{dados}")
    @Transactional
    public ResponseEntity<?> inativo(@PathVariable DadosInativarUsuarioDTO dados) {

        try{
            DadosInativarUsuarioDTO inativar = this.usuarioService.inativar(dados);
            return ResponseEntity.noContent().build();
        }catch (Exception e){

            return ResponseEntity.notFound().build();

        }
    }


}
