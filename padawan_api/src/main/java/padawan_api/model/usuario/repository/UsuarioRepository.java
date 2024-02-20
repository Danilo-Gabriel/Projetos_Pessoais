package padawan_api.model.usuario.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import padawan_api.model.conta.dto.AssociarUsuarioAContaDTO;


public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByNomeLogin(String nomeLogin); //Tratamento de Login atraves de usuario do tipo optional (pode ser nulo ou não)

    Optional<Usuario> findByEmail(String email);

    Optional<Usuario> findByHash(String hash);

    Optional<Usuario> findByNomeCompleto(AssociarUsuarioAContaDTO dados);

    Optional<Usuario> findByNomeCompleto(String nomeCompleto);

}
