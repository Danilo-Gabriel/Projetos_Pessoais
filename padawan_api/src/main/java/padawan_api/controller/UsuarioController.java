package padawan_api.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import padawan_api.model.usuario.Usuario;
import padawan_api.model.usuario.dto.DadosAtualizaLoginDTO;
import padawan_api.model.usuario.dto.DadosCadastroUsuarioDTO;
import padawan_api.model.usuario.dto.DadosListarUsuarioDTO;
import padawan_api.model.usuario.dto.ReturnCadastroUsuarioDTO;
import padawan_api.model.usuario.dto.ReturnDetalhesUsuarioDTO;
import padawan_api.service.usuario.UsuarioService;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;





@RestController
@CrossOrigin(origins = ("*"))
@RequestMapping("/usuarios")

public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;


    @PostMapping("cadastrar")
    @Transactional
    public ResponseEntity<?> cadastrarUsuarioClassController(@RequestBody DadosCadastroUsuarioDTO dados){

        try{

            
            ReturnCadastroUsuarioDTO usuarioDTO;

            usuarioDTO = this.usuarioService.cadastrarUsuarioClassService(dados);
           
            return ResponseEntity.status(HttpStatus.CREATED).body(usuarioDTO);
        }

        catch(Exception e){
        
            return ResponseEntity.badRequest().body(e.getMessage());
        }


    }


    @GetMapping("list")
    public ResponseEntity<List<DadosListarUsuarioDTO>> listUsuarioClassController(){

        try {
            //Thread.sleep(2000);
           List<DadosListarUsuarioDTO> listarUsuario = this.usuarioService.listarUsuarioClassService();
           
           return ResponseEntity.ok().body(listarUsuario);

        }catch (Exception e){

            return ResponseEntity.badRequest().build();
        }

    }


    @PutMapping("atualizar")
    @Transactional
    public  ResponseEntity<?> atualizarUsuarioClassController(@RequestBody DadosAtualizaLoginDTO dados) {

        try{
         
            this.usuarioService.atualizarUsuarioClassService(dados);

            return ResponseEntity.ok(dados);
        }
        catch(Exception e){

            return ResponseEntity.badRequest().body(e.getMessage());
        }


    }

  

    /*
    @PutMapping("inativar/{id}")
    @Transactional
    public ResponseEntity<?> inativaUsuarioClassController(@PathVariable Long id) {

        try{

             this.usuarioService.inativarUsuarioClassService(id);
            return ResponseEntity.ok().body("Usuário inativo");
            
        }catch (Exception e){

            return ResponseEntity.badRequest().body(e.getMessage());

        }
    }

   
    @PutMapping("ativar/{id}")
    @Transactional
    public ResponseEntity<?> ativarUsuarioClassController(@PathVariable Long id) {

        try{ 

            this.usuarioService.ativarUsuarioClassService(id);

            return ResponseEntity.ok().body("Usuário ativo");
            
        }catch (Exception e){

            return ResponseEntity.badRequest().body(e.getMessage());

        }
    }
     */

 


    @DeleteMapping("deletar/{id}")
    public ResponseEntity<?> deletarUsuarioClassController(@PathVariable Long id){

        try{

            this.usuarioService.deletarUsuarioClassService(id);
            return ResponseEntity.ok().body("Usuário deletado");

        }catch(Exception e){

             return ResponseEntity.badRequest().body(e.getMessage());
        }
      

      
    }

    @GetMapping("{id}")
    @Transactional
    public ResponseEntity<?> detalhesDadosUsuarioClassController(@PathVariable Long id){

        try{

            ReturnDetalhesUsuarioDTO usuarioDTO;

             usuarioDTO = usuarioService.detalhesDadosUsuarioClassService(id);
            

             return ResponseEntity.ok().body(usuarioDTO);

        }catch(Exception e){

            return ResponseEntity.badRequest().build();

        }

        /*
         return usuarioService.buscarDadosIdUsuario(id).map(record -> ResponseEntity.ok().body(record))
        .orElse(ResponseEntity.notFound().build());
       */
        

    }
    


}


        /*METODOS PARA FUTURAS ATUALIZAÇÕES */


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
