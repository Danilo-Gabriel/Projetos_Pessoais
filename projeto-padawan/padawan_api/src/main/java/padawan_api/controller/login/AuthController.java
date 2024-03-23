package padawan_api.controller.login;


import padawan_api.model.usuario.dto.EfetuarLoginDTO;
import padawan_api.model.usuario.dto.ReturnEfetuarLoginDTO;
import padawan_api.services.jwt.AuthService;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
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
    private AuthService authservice;

    @Autowired
    private AuthenticationManager manager;


    @PostMapping("/login")
    public ResponseEntity<?> efetuarLogin(@RequestBody EfetuarLoginDTO dados, HttpServletResponse response) throws AuthenticationException{

        try {

            Authentication auth =  manager.authenticate(new UsernamePasswordAuthenticationToken(dados.login(), dados.senha()));
    
            ReturnEfetuarLoginDTO resp =  this.authservice.autenticacaoClassService(dados, response, auth);

            return ResponseEntity.ok(resp);

        } catch (AuthenticationException e) {
            System.out.println(e);
            return ResponseEntity.status(400).body("Usuário ou senha incorreta");
        }
        catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.status(400).body("" + e.getMessage());
        }
      


    }

}
