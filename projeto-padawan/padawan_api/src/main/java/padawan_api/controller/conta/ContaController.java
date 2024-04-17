package padawan_api.controller.conta;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.transaction.Transactional;
import padawan_api.model.conta.dto.AtualizarContaDTO;
import padawan_api.model.conta.dto.ListarContaDTO;
import padawan_api.model.conta.dto.RegistrarContaDTO;
import padawan_api.model.conta.services.ContaService;
import padawan_api.model.usuario.dto.AssociarUsuarioAContaDTO;
import padawan_api.model.usuario.dto.ReturnDTO;




@RestController
//@CrossOrigin(origins = ("*"))
@RequestMapping("/api/conta")
public class ContaController {

    
    @Autowired
    private ContaService contaService;
    
    @PostMapping("/registrar")
    @Transactional
    public ResponseEntity<?> registrarContaClassController(@RequestBody RegistrarContaDTO dados){


        try {

            ReturnDTO resp = new ReturnDTO("Criado com sucesso");

            this.contaService.registrarContaClassService(dados);

            return ResponseEntity.status(HttpStatus.CREATED).body(resp);
        } catch (Exception e) {
            
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

   // @Secured({ConstantesUtil.USER})
    @GetMapping("/list")
    public ResponseEntity<List<ListarContaDTO>> listarContaClassController(){
      
        try {
            
            List<ListarContaDTO> listarConta = this.contaService.listarContaClassService();

            return ResponseEntity.ok().body(listarConta);

        } catch (Exception e) {
            
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }


     @PutMapping("/associarConta")
     @Transactional
     public ResponseEntity<?> associarUsuarioAContaClassController(@RequestBody AssociarUsuarioAContaDTO dados) throws Exception {

            try {
                this.contaService.associarUsuarioAContaClassService(dados);

                ReturnDTO resp = new ReturnDTO("Usuário associado com sucesso!");

                return ResponseEntity.ok().body(resp);

            } catch (Exception e) {

                return ResponseEntity.badRequest().body(e.getMessage());
            }

    }


    
    @GetMapping("{id}")
    @Transactional
    public ResponseEntity<?> detalhesDadosContaClassController(@PathVariable Long id){

        try{

            ListarContaDTO listarContaDTO =  contaService.detalhesDadosContaClassService(id);
            

             return ResponseEntity.ok().body(listarContaDTO);

        }catch(Exception e){

            return ResponseEntity.badRequest().build();

        }

    
    }


    @DeleteMapping("deletar/{id}")
    @Transactional
    public ResponseEntity<?> deletarContaClassController(@PathVariable Long id){
        
    try {
        
        this.contaService.deletarContaClassService(id);

        return ResponseEntity.ok().body("Conta deletada");

    } catch (Exception e) {
       
       return ResponseEntity.badRequest().body(e.getMessage());

    }
}

    @PutMapping("atualizar")
    @Transactional
    public ResponseEntity<?> atualizarContaClassController(@RequestBody AtualizarContaDTO dados){

        try {

            this.contaService.atualizarContaClassService(dados);

           return ResponseEntity.ok(dados);

        } catch (Exception e) {


            return ResponseEntity.badRequest().body(e.getMessage());
        }
        
    }
   

}
