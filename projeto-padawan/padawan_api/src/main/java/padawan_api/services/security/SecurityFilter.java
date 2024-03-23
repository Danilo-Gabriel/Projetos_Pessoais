package padawan_api.services.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import padawan_api.model.usuario.repository.UsuarioRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecurityFilter extends OncePerRequestFilter {
    @Autowired
    TokenService tokenService;
    
    @Autowired
    UsuarioRepository repository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
       
        String token = this.recoverToken(request);

        if(token != null){

            token = tokenService.validarToken(token);
            UserDetails user = repository.findByNomeLogin(token);

           Authentication authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        filterChain.doFilter(request, response);
 
        /*
        

        if (request.getCookies() != null){
            for (Cookie cookie : request.getCookies()){
                if (cookie.getName().equals("acessToken")){
                    token = cookie.getValue();
                }
            }
        }

        if (token == null){
            filterChain.doFilter(request, response);
            return;
        }

        if (nomeUser != null){
            UserDetails userDetails = authService.loadUserByUsername(nomeUser);
            if(tokenService.validarToken(token))
        }

         * 
         * 
         */
    }

    private String recoverToken(HttpServletRequest request){

        if (request.getCookies() != null){
            for (Cookie cookie : request.getCookies()){
                if (cookie.getName().equals("acessToken")){

                    String token = cookie.getValue();
                    return token;
                }
            }
        }

        return null;

         /* 
        var authHeader = request.getHeader("Authorization");
        if(authHeader == null) return null;
        return authHeader.replace("Bearer ", "");
        */
    }
    
}
