package padawan_api.service.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import padawan_api.model.usuario.Usuario;
import padawan_api.model.usuario.dto.DadosAtualizaLoginDTO;
import padawan_api.model.usuario.dto.DadosCadastroUsuarioDTO;
import padawan_api.model.usuario.dto.DadosListarUsuarioDTO;
import padawan_api.model.usuario.dto.DadosEfetuarLoginDTO;
import padawan_api.model.usuario.dto.ReturnEfetuarLoginDTO;
import padawan_api.model.usuario.dto.DadosAtualizaSenhaDTO;
import padawan_api.model.usuario.dto.ReturnCadastroUsuarioDTO;
import padawan_api.repository.UsuarioRepository;

import java.util.Optional;
import java.util.List;

@Service
public class UsuarioService {


    @Autowired
    private UsuarioRepository repository;

    public ReturnEfetuarLoginDTO efetuarLoginClassService(DadosEfetuarLoginDTO dados) throws Exception{


        ReturnEfetuarLoginDTO usuarioDTO;

        Optional<Usuario> usuarioOptional = repository.findByLogin(dados.login());

        if(usuarioOptional.isPresent()){

            Usuario usuario = usuarioOptional.get();

            if(usuario.isSituacao()){

                usuarioOptional.get().efetuarLoginClassUsuarioJPA(dados);

                return usuarioDTO = new ReturnEfetuarLoginDTO(usuario.getId(), usuario.getLogin());

            }else{

                throw new Exception("USUARIO ESTÁ INATIVO");
            }

            
          }else{

            throw new Exception("USUARIO NÃO CADASTRADO");
          }

    }

    public void alterarSenhaClassService(DadosAtualizaSenhaDTO dados) throws Exception{

        Optional<Usuario> usuarioOptional = repository.findById(dados.id());

        if(usuarioOptional.isPresent()){

            Usuario usuario = usuarioOptional.get();

            if(usuario.isSituacao()){
                
                 usuario.alterarSenhaClassUsuarioJPA(dados);
                 repository.save(usuario);
                 
            }else{
                throw new Exception("USUÁRIO INATIVO");
            }

        }else {

            throw new Exception("USUÁRIO NÃO ECONTRADO OU NÃO CADASTRADO");

        }
      
       
        
        
    }


    public ReturnCadastroUsuarioDTO cadastrarUsuarioClassService(DadosCadastroUsuarioDTO dados) throws Exception {

        Optional<Usuario> usuariOptional = repository.findByLogin(dados.login());

        ReturnCadastroUsuarioDTO usuarioDTO;
        
        if(usuariOptional.isPresent()){

            throw new Exception("USUARIO JÁ CADASTRADO");
        }
        else {

        Usuario usuario = new Usuario(dados);

        repository.save(usuario);

        usuarioDTO = new ReturnCadastroUsuarioDTO(usuario.getId(), usuario.getLogin());

        return usuarioDTO;

        }

     
    }

    public List<DadosListarUsuarioDTO> listarUsuarioClassService(){

        return repository.findAllByAtivoTrue().stream().map(DadosListarUsuarioDTO::new).toList();
    }

 

    public DadosAtualizaLoginDTO atualizarUsuarioClassService(DadosAtualizaLoginDTO dados) throws Exception {


        Optional<Usuario> usuariosOptional = this.repository.findById(dados.id());
   
        if (usuariosOptional.isPresent()) {

            Usuario usuario = usuariosOptional.get();

            if (usuario.isSituacao()) {

                usuario.atualizarUsuarioClassUsuarioJPA(dados);

                repository.save(usuario);

            } else {

                throw new Exception("USUÁRIO NÃO ESTÁ ATIVO, APENAS USUÁRIOS ATIVOS PODEM SER ATUALIZADOS ");
            }

        } else {

            throw new Exception("USUÁRIO NÃO CADASTRADO");
        }

        return dados;
    }

    public void inativarUsuarioClassService(Long id) throws Exception {

        Optional<Usuario> usuarioOptional = this.repository.findById(id);
        if (usuarioOptional.isPresent()) {

            Usuario usuario = usuarioOptional.get();

            if (usuario.isSituacao()) {

                usuario.inativar();

                repository.save(usuario);

            }
            else{

                throw new Exception("USUARIO JÁ ESTÁ INATIVO");
            }
           
        } else {

            throw new Exception("USUARIO NÃO CADASTRADO");
        }

    }

        public void ativarUsuarioClassService(Long id) throws Exception {

        Optional<Usuario> usuarioOptional = this.repository.findById(id);
        if (usuarioOptional.isPresent()) {

            Usuario usuario = usuarioOptional.get();

            if (!usuario.isSituacao()) {

                usuario.ativar();

                repository.save(usuario);

            }
            else{

                throw new Exception("USUARIO JÁ ESTÁ ATIVO");
            }
           
        } else {

            throw new Exception("USUARIO NÃO CADASTRADO");
        }

    }


    public Optional<Usuario> detalhesDadosUsuarioClassService(Long id) {

       return this.repository.findById(id);
     
        
    }

    public void deletarUsuarioClassService(Long id){
        
        repository.deleteById(id);
    }

 
}


/*METODOS PARA SEREM USADOS FUTURAMENTE */

   /*
    public Page<DadosListagemUsuarioDTO> listUsuario(@PageableDefault(size = 10, sort = {"id"}) Pageable paginacao) {

        Page<DadosListagemUsuarioDTO> x = repository.findAllByAtivoTrue(paginacao).map(DadosListagemUsuarioDTO::new);

        return x;
    }
     */




