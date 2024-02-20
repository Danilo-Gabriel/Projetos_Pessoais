package padawan_api.controller.usuario;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import padawan_api.model.conta.dto.AssociarUsuarioAContaDTO;
import padawan_api.model.usuario.dto.AlterarRegistroDeUsuariosDTO;
import padawan_api.model.usuario.dto.ListarUsuarioDTO;
import padawan_api.model.usuario.dto.RegistrarUsuarioDTO;

import padawan_api.model.usuario.repository.Usuario;
import padawan_api.model.usuario.dto.ReturnDTO;
import padawan_api.model.usuario.services.UsuarioService;

import java.util.List;





@RestController
@CrossOrigin(origins = ("*"))
@RequestMapping("/usuarios")

public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;


    @PostMapping("cadastrar")
    @Transactional
    public ResponseEntity<?> cadastrarUsuarioClassController(@RequestBody RegistrarUsuarioDTO dados){

        try{

            ReturnDTO resp = new ReturnDTO("Criado com sucesso!");
            
            this.usuarioService.cadastrarUsuarioClassService(dados);
           
            return ResponseEntity.status(HttpStatus.CREATED).body(resp);
        }

        catch(Exception e){
        
            return ResponseEntity.badRequest().body(e.getMessage());
        }


    }


    @GetMapping("list")
    public ResponseEntity<List<ListarUsuarioDTO>> listUsuarioClassController(){

        try {
            //Thread.sleep(2000);
           List<ListarUsuarioDTO> listarUsuario = this.usuarioService.listarUsuarioClassService();
           
           return ResponseEntity.ok().body(listarUsuario);

        }catch (Exception e){

            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().build();
        }

    }


    @PutMapping("atualizar")
    @Transactional
    public  ResponseEntity<?> atualizarUsuarioClassController(@RequestBody AlterarRegistroDeUsuariosDTO  dados) {

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

      

            Usuario usuarioDTO =  usuarioService.detalhesDadosUsuarioClassService(id);
            

             return ResponseEntity.ok().body(usuarioDTO);

        }catch(Exception e){

            return ResponseEntity.badRequest().build();

        }

        /*
         return usuarioService.buscarDadosIdUsuario(id).map(record -> ResponseEntity.ok().body(record))
        .orElse(ResponseEntity.notFound().build());
       */
        

    }


    @PostMapping("associar")
    public ResponseEntity<?> associarUsuarioAContaClassController(@RequestBody AssociarUsuarioAContaDTO dados){

        try {
            ReturnDTO resp = new ReturnDTO("Usuário associado com sucesso");

            this.usuarioService.associarUsuarioAContaClassService(dados);

            return ResponseEntity.ok().body(resp);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }


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
