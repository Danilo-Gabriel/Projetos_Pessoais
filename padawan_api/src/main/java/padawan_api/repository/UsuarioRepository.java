package padawan_api.repository;

import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


import padawan_api.domain.usuario.Usuario;
import java.util.List;


public interface UsuarioRepository extends JpaRepository<Usuario, Long> {


    Page<Usuario> findAllByAtivoTrue(Pageable paginacao);

    List<Usuario> findAllByAtivoTrue();// Paginação

    Optional<Usuario> findByLogin(String login); //Tratamento de Login atraves de usuario do tipo optional (pode ser nulo ou não)


   //      UserDetails findByLogin(String login);

}
