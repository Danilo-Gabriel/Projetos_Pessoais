package padawan_api.controller.login;


import padawan_api.model.usuario.dto.EfetuarLoginDTO;
import padawan_api.model.usuario.dto.ReturnEfetuarLoginDTO;
import padawan_api.model.usuario.repository.Usuario;
import padawan_api.model.usuario.services.UsuarioService;
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


    @Value("")
    private String cookieExpiry;


    @PostMapping("/login")
    public ResponseEntity<?> efetuarLogin(@RequestBody EfetuarLoginDTO dados, HttpServletResponse response){

        try {

            Authentication auth =  manager.authenticate(new UsernamePasswordAuthenticationToken(dados.login(), dados.senha()));

            if(auth.isAuthenticated()){
    
                String token = tokenService.gerarToken((Usuario) auth.getPrincipal());
                Usuario usuario = (Usuario) auth.getPrincipal();

                ResponseCookie cookie = ResponseCookie.from("acessToken", token)
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(-1)
                .build();

                response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
          
                return ResponseEntity.ok(new ReturnEfetuarLoginDTO(usuario.getId(), usuario.getNomeLogin(), usuario.getConta().getNomeConta(), token));
            }
         
            return ResponseEntity.status(400).body("Error de autenticação");

        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.status(400).body("" + e.getMessage());
        }
      


    }

}
