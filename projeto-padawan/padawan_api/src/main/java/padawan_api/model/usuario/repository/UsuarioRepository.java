package padawan_api.model.usuario.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;


public interface UsuarioRepository extends JpaRepository<Usuario, Long> {


    Optional<Usuario> findByEmail(String email);

    Optional<Usuario> findByHash(String hash);

   // Optional<Usuario> findByNomeLogin(String s); SEM JWT
  
    UserDetails findByNomeLogin(String login);

  



}
