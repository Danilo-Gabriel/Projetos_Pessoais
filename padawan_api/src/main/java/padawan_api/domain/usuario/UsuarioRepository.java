package padawan_api.domain.usuario;

import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.data.jpa.repository.Query;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

   Page<Usuario> findAllByAtivoTrue(Pageable paginacao); // Paginação

    Optional<Usuario> findByLogin(String login); //Tratamento de Login atraves de usuario do tipo optional (pode ser nulo ou não)


   //      UserDetails findByLogin(String login);

}
