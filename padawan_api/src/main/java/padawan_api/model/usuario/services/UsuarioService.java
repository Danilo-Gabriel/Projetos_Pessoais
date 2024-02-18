package padawan_api.model.usuario.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import padawan_api.model.usuario.dto.DadosAtualizaLoginDTO;
import padawan_api.model.usuario.dto.DadosCadastroUsuarioDTO;
import padawan_api.model.usuario.dto.DadosListarUsuarioDTO;
import padawan_api.model.usuario.dto.DadosEfetuarLoginDTO;
import padawan_api.model.usuario.dto.ReturnEfetuarLoginDTO;
import padawan_api.model.usuario.repository.Usuario;
import padawan_api.model.usuario.repository.UsuarioRepository;
import padawan_api.services.email.services.EmailService;
import padawan_api.model.usuario.dto.DadosAtualizaSenhaDTO;
import padawan_api.model.usuario.dto.ReturnCadastroUsuarioDTO;
import padawan_api.model.usuario.dto.ReturnDetalhesUsuarioDTO;

import java.util.Optional;
import java.util.List;

@Service
public class UsuarioService {


    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private EmailService emailService;

    public ReturnEfetuarLoginDTO efetuarLoginClassService(DadosEfetuarLoginDTO dados) throws Exception{


        ReturnEfetuarLoginDTO usuarioDTO;

        Optional<Usuario> usuarioOptional = repository.findByLogin(dados.login());

        if(usuarioOptional.isPresent()){

            Usuario usuario = usuarioOptional.get();

            if(usuario.isSituacao()){

                usuarioOptional.get().efetuarLoginClassUsuarioJPA(dados);

                return usuarioDTO = new ReturnEfetuarLoginDTO(usuario.getId(), usuario.getLogin());

            }else{

                throw new Exception("Usuário está inativo");
            }

            
          }else{

            throw new Exception("Usuário não cadastrado");
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
                throw new Exception("Usuário inativo");
            }

        }else {

            throw new Exception("Usuário não encontrado ou não cadastrado");

        }
      
       
        
        
    }


    public ReturnCadastroUsuarioDTO cadastrarUsuarioClassService(DadosCadastroUsuarioDTO dados) throws Exception {

        Optional<Usuario> usuariOptional = repository.findByLogin(dados.login());

        ReturnCadastroUsuarioDTO usuarioDTO;
        
        if(usuariOptional.isPresent()){

            throw new Exception("Usuário já cadastrado");
        }
        else {

        Usuario usuario = new Usuario(dados);

        repository.save(usuario);

        usuarioDTO = new ReturnCadastroUsuarioDTO(usuario.getId(), usuario.getLogin());

        return usuarioDTO;

        }

     
    }

    public List<DadosListarUsuarioDTO> listarUsuarioClassService(){

        return repository.findAll().stream().map(DadosListarUsuarioDTO::new).toList();
    }

 

    public DadosAtualizaLoginDTO atualizarUsuarioClassService(DadosAtualizaLoginDTO dados) throws Exception {


        Optional<Usuario> usuariosOptional = this.repository.findById(dados.id());
   
        if (usuariosOptional.isPresent()) {

            Usuario usuario = usuariosOptional.get();

            usuario.atualizarUsuarioClassUsuarioJPA(dados);

            repository.save(usuario);

        } else {

            throw new Exception("Usuário não cadastrado ");
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

                throw new Exception("Usuário já está inativo");
            }
            
           
        } else {

            throw new Exception("Usuário não cadastrado");
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

                throw new Exception("Usuário já está ativo");
            }
           
        } else {

            throw new Exception("Usuário não cadastrado");
        }

    }


    public ReturnDetalhesUsuarioDTO detalhesDadosUsuarioClassService(Long id) {

        Optional<Usuario> usuarioOptional = this.repository.findById(id);

        Usuario usuario = usuarioOptional.get();

        ReturnDetalhesUsuarioDTO usuarioDTO;

        usuarioDTO = new ReturnDetalhesUsuarioDTO(usuario.getId(), usuario.getLogin(), usuario.getNome_completo(), usuario.getEmail(), usuario.getCpf(), usuario.getAtivo());
        
        return usuarioDTO;
        
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




