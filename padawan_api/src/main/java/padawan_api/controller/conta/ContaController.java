package padawan_api.controller.conta;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.transaction.Transactional;
import padawan_api.model.conta.dto.ListarContaDTO;
import padawan_api.model.conta.dto.RegistrarContaDTO;
import padawan_api.model.conta.services.ContaService;
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



}
