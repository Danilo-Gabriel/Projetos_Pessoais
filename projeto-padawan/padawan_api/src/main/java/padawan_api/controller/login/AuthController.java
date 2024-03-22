package padawan_api.controller.login;


import padawan_api.model.usuario.dto.EfetuarLoginDTO;
import padawan_api.model.usuario.dto.ReturnEfetuarLoginDTO;
import padawan_api.model.usuario.repository.Usuario;
import padawan_api.model.usuario.services.UsuarioService;
import padawan_api.services.jwt.AuthService;
import padawan_api.services.security.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletResponse;


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

    @Autowired

    private AuthService authservice;


    @Value("")
    private String cookieExpiry;


    @PostMapping("/login")
    public ResponseEntity<?> efetuarLogin(@RequestBody EfetuarLoginDTO dados, HttpServletResponse response){

        try {

            ReturnEfetuarLoginDTO resp =  this.authservice.autenticacaoClassService(dados, response);

            return ResponseEntity.ok(resp);

        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.status(400).body("" + e.getMessage());
        }
      


    }

}
