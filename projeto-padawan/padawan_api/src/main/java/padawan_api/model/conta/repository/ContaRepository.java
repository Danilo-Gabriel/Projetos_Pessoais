package padawan_api.model.conta.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ContaRepository extends JpaRepository<Conta, Long> {

    @Query("SELECT c FROM Conta c JOIN FETCH c.usuario")
    List<Conta> listarContasComPessoa();
   
    Optional<Conta> findByNomeConta(String nomeConta);
    
}
