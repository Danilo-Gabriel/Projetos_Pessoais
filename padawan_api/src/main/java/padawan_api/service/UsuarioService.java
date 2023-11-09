package padawan_api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import padawan_api.domain.usuario.Usuario;
import padawan_api.domain.usuario.dto.DadosAtualizaUsuarioDTO;
import padawan_api.domain.usuario.dto.DadosCadastroUsuarioDTO;
import padawan_api.domain.usuario.dto.DadosInativarUsuarioDTO;
import padawan_api.domain.usuario.dto.DadosListagemUsuarioDTO;
import padawan_api.repository.UsuarioRepository;

import java.util.Optional;

@Service
public class UsuarioService {


    @Autowired
    private UsuarioRepository repository;

    public DadosCadastroUsuarioDTO cadastrar(DadosCadastroUsuarioDTO dados) {
        Usuario usuario = new Usuario(dados);
        repository.save(usuario);
        return dados;
    }

    public Page<DadosListagemUsuarioDTO> listUsuario(@PageableDefault(size = 10, sort = {"id"}) Pageable paginacao) {

        Page<DadosListagemUsuarioDTO> x = repository.findAllByAtivoTrue(paginacao).map(DadosListagemUsuarioDTO::new);

        return x;
    }

    public DadosAtualizaUsuarioDTO atualizar(DadosAtualizaUsuarioDTO dados) throws Exception {

        Optional<Usuario> usuariosOptional = this.repository.findByLogin(dados.login());

        if (usuariosOptional.isPresent()) {
            Usuario usuario = usuariosOptional.get();
            if (usuario.isAtivo()) {
                usuario.atualizarInformacao(dados);
                repository.save(usuario);
            } else {
                throw new Exception("Usuario não está ativo e não pode ser atualizado");
            }

        } else {
            throw new Exception("Usuário não cadastrado");
        }
        return dados;
    }

    public DadosInativarUsuarioDTO inativar(DadosInativarUsuarioDTO dados) throws Exception {

        Optional<Usuario> usuarioOptional = this.repository.findByLogin(dados.login());
        if (usuarioOptional.isPresent()) {
            Usuario usuario = usuarioOptional.get();
            usuario.inativo();
            repository.save(usuario);
        } else {
            throw new Exception("Erro ao inativar usuario");
        }

        return dados;

    }
}





