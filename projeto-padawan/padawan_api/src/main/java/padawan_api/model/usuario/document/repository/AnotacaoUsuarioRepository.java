package padawan_api.model.usuario.document.repository;



import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import padawan_api.model.usuario.document.elasticsearch.AnotacaoUsuario;


public interface AnotacaoUsuarioRepository extends ElasticsearchRepository<AnotacaoUsuario ,Long> {


}
