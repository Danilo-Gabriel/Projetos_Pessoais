package padawan_api.controller.login;


import padawan_api.model.usuario.dto.EfetuarLoginDTO;
import padawan_api.model.usuario.dto.ReturnEfetuarLoginDTO;
import padawan_api.model.usuario.repository.Usuario;
import padawan_api.model.usuario.services.UsuarioService;
import padawan_api.services.security.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
//@CrossOrigin(origins = ("*"))
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    UsuarioService usuarioService;


    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private TokenService tokenService;


    @PostMapping("/login")
    public ResponseEntity<?> efetuarLogin(@RequestBody EfetuarLoginDTO dados){

        try {

        UsernamePasswordAuthenticationToken usernamePassword = new UsernamePasswordAuthenticationToken(dados.login(), dados.senha());
        Authentication auth =  manager.authenticate(usernamePassword);

        String token = tokenService.gerarToken((Usuario) auth.getPrincipal());
        Usuario usuario = (Usuario) auth.getPrincipal();

      
        return ResponseEntity.ok(new ReturnEfetuarLoginDTO(usuario.getId(), usuario.getNomeLogin(), usuario.getConta().getNomeConta(), token));

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        

    }

}
