package padawan_api.services.redis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetails;

import padawan_api.model.usuario.repository.UsuarioRepository;



@Configuration
@EnableCaching
public class RedisConfig {

    @Autowired
    private UsuarioRepository repository;

  
    @Cacheable("usuario")
    public String teste(String login){
      
        UserDetails user = this.repository.findByNomeLogin(login);
        return user.getUsername();
    }

}

