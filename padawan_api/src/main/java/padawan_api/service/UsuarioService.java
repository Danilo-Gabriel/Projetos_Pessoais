package padawan_api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import padawan_api.domain.usuario.Usuario;
import padawan_api.domain.usuario.dto.DadosCadastroUsuario_DTO;
import padawan_api.repository.UsuarioRepository;

@Service
public class UsuarioService {


    @Autowired
    private UsuarioRepository repository;

    public DadosCadastroUsuario_DTO cadastrar(DadosCadastroUsuario_DTO dados){
        Usuario usuario = new Usuario(dados);
        repository.save(usuario);
        return dados;
    }
    
}
