/*package padawan_api.controller.auth;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import padawan_api.model.conta.dto.RegistrarContaDTO;
import padawan_api.model.usuario.dto.EfetuarLoginDTO;
import padawan_api.model.usuario.dto.LoginResponseDTO;
import padawan_api.model.usuario.dto.RegistrarUsuarioDTO;
import padawan_api.model.usuario.repository.Usuario;
import padawan_api.model.usuario.services.UsuarioService;
import padawan_api.services.security.TokenService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private UsuarioService usuarioService;


    @Autowired
    private TokenService tokenService;


    @PostMapping("/login")
    public ResponseEntity efetuarLogin(@RequestBody EfetuarLoginDTO dados){

        var usernamePassword = new UsernamePasswordAuthenticationToken(dados.login(), dados.senha());
        var auth =  manager.authenticate(usernamePassword);

        var token = tokenService.gerarToken((Usuario) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));

    }

    
    @PostMapping("/registrar")
    @Transactional
    public ResponseEntity<?> registrarUsuarioClassController(@RequestBody @Valid RegistrarUsuarioDTO dados){

        try{
            this.usuarioService.registrarUsuarioClassService(dados);
           
            return ResponseEntity.status(HttpStatus.CREATED).body(dados);
        }

        catch(Exception e){
        
            return ResponseEntity.badRequest().body(e.getMessage());
        }


    }
}

*/