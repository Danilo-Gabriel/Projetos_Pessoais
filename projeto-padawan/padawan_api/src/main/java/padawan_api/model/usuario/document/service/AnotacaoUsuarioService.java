package padawan_api.model.usuario.document.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import padawan_api.model.usuario.document.elasticsearch.AnotacaoUsuario;
import padawan_api.model.usuario.document.repository.AnotacaoUsuarioRepository;

@Service
public class AnotacaoUsuarioService {


    @Autowired
    private AnotacaoUsuarioRepository repository;


    public void save(AnotacaoUsuario usuario){
        repository.save(usuario);
    }

    public AnotacaoUsuario findById(Long id){
        return repository.findById(id).orElse(null);
    }

}
