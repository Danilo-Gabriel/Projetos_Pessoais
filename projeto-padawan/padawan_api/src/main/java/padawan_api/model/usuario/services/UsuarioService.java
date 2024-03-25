package padawan_api.model.usuario.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import padawan_api.model.conta.repository.Conta;
import padawan_api.model.conta.repository.ContaRepository;
import padawan_api.model.usuario.dto.AtualizarRegistroDeUsuariosDTO;
import padawan_api.model.usuario.dto.AlterarSenhaUsuarioLogadoDTO;
import padawan_api.model.usuario.dto.AssociarUsuarioAContaDTO;
import padawan_api.model.usuario.dto.EfetuarLoginDTO;
import padawan_api.model.usuario.dto.ListarUsuarioDTO;
import padawan_api.model.usuario.dto.RegistrarUsuarioDTO;
import padawan_api.model.usuario.dto.ReturnEfetuarLoginDTO;
import padawan_api.model.usuario.dto.UsuarioDTO;
import padawan_api.model.usuario.repository.Usuario;
import padawan_api.model.usuario.repository.UsuarioRepository;
import padawan_api.services.email.services.EmailService;

import java.util.Optional;
import java.util.List;

@Service
public class UsuarioService {


    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private ContaRepository contaRepository;

    @Autowired
    private EmailService emailService;


     public void registrarUsuarioClassService(RegistrarUsuarioDTO dados) throws Exception{

       if(this.repository.findByNomeLogin(dados.nomeLogin()) != null) throw new Exception("Login já se encontra em uso, escolha outro");

        String encryptedPassword = new BCryptPasswordEncoder().encode(dados.senha());
        
        Usuario newUser = new Usuario(dados);

        this.repository.save(newUser);

    }

    /* 
    SEM JWT
    public RegistrarUsuarioDTO registrarUsuarioClassService(RegistrarUsuarioDTO dados) throws Exception{

        Optional<Usuario> usuarioOptional = this.repository.findByNomeLogin(dados.nomeLogin());

        if(usuarioOptional.isPresent()){
            throw new Exception("Usuário já cadastrado");
        }
        else {

            Usuario novoUsuario = new Usuario(dados);

            this.repository.save(novoUsuario);
    
            return dados;
        }
   

    }



    public ReturnEfetuarLoginDTO efetuarLoginClassService(EfetuarLoginDTO dados) throws Exception{


        ReturnEfetuarLoginDTO usuarioDTO;

        Optional<Usuario> usuarioOptional = repository.findByNomeLogin(dados.login());

        if(usuarioOptional.isPresent()){

            Usuario usuario = usuarioOptional.get();

            if(usuario.isSituacao()){

                usuarioOptional.get().efetuarLoginClassUsuarioJPA(dados);

                return usuarioDTO = new ReturnEfetuarLoginDTO(usuario.getId(), usuario.getNomeLogin());

            }else{

                throw new Exception("Usuário está inativo");
            }

            
          }else{

            throw new Exception("Usuário não cadastrado");
          }

    }

        */


    public void alterarSenhaClassService(AlterarSenhaUsuarioLogadoDTO dados) throws Exception{

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


    /* 
    public void cadastrarUsuarioClassService(RegistrarUsuarioDTO dados) throws Exception {

        Optional<Usuario> usuariOptional = repository.findByNomeLogin(dados.nomeLogin());

        if(usuariOptional.isPresent()){

            throw new Exception("Usuário já cadastrado");
        }
        else {

        Usuario usuario = new Usuario(dados);

        repository.save(usuario);

        }

     
    }
    */

        public List<ListarUsuarioDTO> listarUsuarioClassService(){
            return repository.findAll().stream().map(ListarUsuarioDTO::new).toList();
        }
  

    public AtualizarRegistroDeUsuariosDTO atualizarUsuarioClassService(AtualizarRegistroDeUsuariosDTO dados) throws Exception {


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


    public UsuarioDTO detalhesDadosUsuarioClassService(Long id) {

        Optional<Usuario> usuarioOptional = this.repository.findById(id);

        Usuario usuario = usuarioOptional.get();

        UsuarioDTO usuarioDTO;
        
        return new UsuarioDTO(usuario);
        
    }

    public void deletarUsuarioClassService(Long id){
        
        repository.deleteById(id);
    }


      public void associarUsuarioAContaClassService(AssociarUsuarioAContaDTO dados) throws Exception {

        Optional<Usuario> usuarioOptional = repository.findById(dados.usuario_id());

        Optional<Conta> contaOptional =  contaRepository.findById(dados.conta_id());

        if(usuarioOptional.isPresent() && contaOptional.isPresent()){

            Usuario usuario = usuarioOptional.get();

            Conta conta = contaOptional.get();

            if(usuario.isSituacao() && conta.isSituacao()){
                
                conta.setUsuario(usuario);

                contaRepository.save(conta);

                usuario.setConta(conta);

                repository.save(usuario);

            }
            else{
                throw new Exception("Usuário ou Conta inativa, contate o administrador do sistema");
            }

        }
        else {
            throw new Exception("Usuário ou Conta não cadastrado, contate o administrador do sistema");
        }
    }
   

 
}


/*METODOS PARA SEREM USADOS FUTURAMENTE */

   /*
    public Page<DadosListagemUsuarioDTO> listUsuario(@PageableDefault(size = 10, sort = {"id"}) Pageable paginacao) {

        Page<DadosListagemUsuarioDTO> x = repository.findAllByAtivoTrue(paginacao).map(DadosListagemUsuarioDTO::new);

        return x;
    }
     */




