package padawan_api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import padawan_api.domain.usuario.Usuario;
import padawan_api.domain.usuario.dto.DadosAtualizaUsuarioDTO;
import padawan_api.domain.usuario.dto.DadosCadastroUsuarioDTO;
import padawan_api.domain.usuario.dto.DadosInativarUsuarioDTO;
import padawan_api.domain.usuario.dto.DadosListagemUsuarioDTO;
import padawan_api.domain.usuario.dto.DadosLoginUsuarioDTO;
import padawan_api.domain.usuario.dto.TrocarSenhaLoginDTO;
import padawan_api.repository.UsuarioRepository;

import java.util.Optional;
import java.util.List;

@Service
public class UsuarioService {


    @Autowired
    private UsuarioRepository repository;

    public void validarLogin(DadosLoginUsuarioDTO dados) throws Exception{

        Optional<Usuario> usuarioOptional = repository.findByLogin(dados.login());


        if(usuarioOptional.isPresent()){

            Usuario usuario = usuarioOptional.get();
            if(usuario.isAtivo()){
                usuarioOptional.get().validarUsuario(dados);
            }else{

                throw new Exception("USUARIO ESTÁ INATIVO");
            }

            
          }else{

            throw new Exception("USUARIO NÃO CADASTRADO");
          }

    }

    public void trocarSenha(TrocarSenhaLoginDTO dados) throws Exception{

        Optional<Usuario> usuarioOptional = repository.findById(dados.id());


        if(usuarioOptional.isPresent()){

            Usuario usuario = usuarioOptional.get();

            if(usuario.isAtivo()){
                
                usuario.validarETrocarSenha(dados);
                 repository.save(usuario);
            }

        }
      
       
        
        
    }


    public DadosCadastroUsuarioDTO cadastrar(DadosCadastroUsuarioDTO dados) throws Exception {

        Optional<Usuario> usuariOptional = repository.findByLogin(dados.login());
        
        if(usuariOptional.isPresent()){
            throw new Exception("USUARIO JÁ CADASTRADO");
        }else{

        Usuario usuario = new Usuario(dados);
        repository.save(usuario);
        return dados;

        }

     
    }

    public List<DadosListagemUsuarioDTO> listarUsuario(){
        return repository.findAllByAtivoTrue().stream().map(DadosListagemUsuarioDTO::new).toList();
    }

    /*
    public Page<DadosListagemUsuarioDTO> listUsuario(@PageableDefault(size = 10, sort = {"id"}) Pageable paginacao) {

        Page<DadosListagemUsuarioDTO> x = repository.findAllByAtivoTrue(paginacao).map(DadosListagemUsuarioDTO::new);

        return x;
    }
     */

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

            if (usuario.isAtivo()) {

                usuario.inativo();
                repository.save(usuario);

            }
            else{
                throw new Exception("USUARIO JÁ ESTÁ INATIVO");
            }
           
        } else {
            throw new Exception("USUARIO NÃO CADASTRADO");
        }

        return dados;

    }


    public Optional<Usuario> buscarDadosIdUsuario(Long id) {

       return this.repository.findById(id);
     
        
    }

    public void deletar(Long id){
        
        repository.deleteById(id);
    }

 
}





