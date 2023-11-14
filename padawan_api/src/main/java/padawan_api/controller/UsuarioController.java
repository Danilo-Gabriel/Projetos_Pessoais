package padawan_api.controller;


import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import padawan_api.domain.usuario.dto.DadosAtualizaUsuarioDTO;
import padawan_api.domain.usuario.dto.DadosCadastroUsuarioDTO;
import padawan_api.domain.usuario.dto.DadosInativarUsuarioDTO;
import padawan_api.domain.usuario.dto.DadosListagemUsuarioDTO;

import padawan_api.service.UsuarioService;


import java.util.List;


@RestController
@CrossOrigin(origins = ("*"))
@RequestMapping("/usuarios")

public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/cadastrar")
    @Transactional
    public ResponseEntity<?> cadastrar(@RequestBody @Valid DadosCadastroUsuarioDTO dados){

        try{
            DadosCadastroUsuarioDTO usuarioCadastrado = this.usuarioService.cadastrar(dados);
           // System.out.println(usuarioCadastrado);
            return ResponseEntity.status(HttpStatus.CREATED).body(usuarioCadastrado);
        }

        catch(Exception e){
          //  System.out.println(e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }


    }

    @GetMapping("/list")
    public ResponseEntity<List<DadosListagemUsuarioDTO>> list(){

        try {
           List<DadosListagemUsuarioDTO> listarUsuario = this.usuarioService.listarUsuario();
           
           return ResponseEntity.ok().body(listarUsuario);
        }catch (Exception e){

            return ResponseEntity.badRequest().build();
        }

    }



    /*
    public ResponseEntity<Page<DadosListagemUsuarioDTO>> listUsuario(Pageable paginacao){

        try {
            Page<DadosListagemUsuarioDTO> listUsuario = this.usuarioService.listUsuario(paginacao);

            return ResponseEntity.ok(listUsuario);


        }catch (Exception e){

           ResponseEntity.<Page<DadosListagemUsuarioDTO>>badRequest().body(e.getMessage());


        }

        return null;
    }

     */

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

    @DeleteMapping("/inativar/{login}")
    @Transactional
    public ResponseEntity<?> inativo(@PathVariable DadosInativarUsuarioDTO login) {

        try{
            DadosInativarUsuarioDTO inativar = this.usuarioService.inativar(login);
            return ResponseEntity.ok().body(inativar);
            
        }catch (Exception e){

            return ResponseEntity.badRequest().body(e.getMessage());

        }
    }


}
