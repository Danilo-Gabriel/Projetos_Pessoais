package padawan_api.services.jwt;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
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


import padawan_api.model.usuario.repository.UsuarioRepository;

@Service
public class AuthService implements UserDetailsService {


    @Autowired
    private UsuarioRepository repository;
    
    @Autowired
    UsuarioService usuarioService;


    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private TokenService tokenService;

    @Autowired

    private AuthService authservice;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository.findByNomeLogin(username);
    }


    public ReturnEfetuarLoginDTO autenticacaoClassService (EfetuarLoginDTO dados, HttpServletResponse response){

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

           ReturnEfetuarLoginDTO resp = new ReturnEfetuarLoginDTO(usuario.getId(), usuario.getNomeLogin(), usuario.getConta().getNomeConta(), token);
            return resp;

        }else{

            throw new Exception("Error, entre em contato com o administrador");
        }
}

     
}

