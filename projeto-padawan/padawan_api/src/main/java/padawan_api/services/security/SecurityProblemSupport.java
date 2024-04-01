package padawan_api.services.security;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@Component
public class SecurityProblemSupport implements AuthenticationEntryPoint, AccessDeniedHandler{


    @Override
    public void commence(final HttpServletRequest request, final HttpServletResponse response,
           final  AuthenticationException authException) throws IOException, ServletException {
        
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Sem autorização");
          

    }

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response,
            AccessDeniedException accessDeniedException) throws IOException, ServletException {
      
        response.sendError(HttpServletResponse.SC_FORBIDDEN, "Acesso negado");
    }
    
   

}
