/*
package padawan_api.infra.security;



import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import org.springframework.stereotype.Service;
import padawan_api.domain.usuario.Usuario;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;

@Service
public class TokenService {

    public String gerarToken(Usuario usuario){
      try {
          var algoritmo = Algorithm.HMAC256("admin");
          return JWT.create()
                  .withIssuer("API Padawan_api") //informação de quem está gerando o token
                  .withSubject(usuario.getLogin())
                  .withExpiresAt(dataExpiracao())
                  .sign(algoritmo);

      }catch (JWTCreationException exception){
          throw new RuntimeException("error ao gerar o token jwt", exception);
      }
    }

    private Instant dataExpiracao() {
        return LocalDateTime .now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }

}


 */