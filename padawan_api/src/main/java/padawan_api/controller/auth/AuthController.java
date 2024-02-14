package padawan_api.controller.auth;
/*package padawan_api.controller;


import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import padawan_api.domain.usuario.DadosAutenticacao;
import padawan_api.domain.usuario.Usuario;
import padawan_api.infra.security.TokenService;

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
    public ResponseEntity efetuarLogin(@RequestBody DadosEfetuarLoginDTO dados){

        var usernamePassword = new UsernamePasswordAuthenticationToken(dados.login(), dados.password());
        var auth =  manager.authenticate(usernamePassword);

        var token = tokenService.gerarToken((Usuario) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));

    }

    
    @PostMapping("/registrar")
    @Transactional
    public ResponseEntity<?> registrarUsuarioClassController(@RequestBody @Valid RegistrarDTO dados){

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
