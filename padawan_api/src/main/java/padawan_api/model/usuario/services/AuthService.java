package padawan_api.model.usuario.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import padawan_api.model.usuario.dto.RegistrarUsuarioDTO;
import padawan_api.model.usuario.dto.ReturnDTO;
import padawan_api.model.usuario.repository.Usuario;
import padawan_api.model.usuario.repository.UsuarioRepository;

@Service
public class AuthService implements UserDetailsService {


    @Autowired
    private UsuarioRepository repository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository.findByNomeLogin(username);
    }

      public void registrarUsuarioClassService(RegistrarUsuarioDTO dados) throws Exception{

       if(this.repository.findByNomeLogin(dados.nomeLogin()) != null) throw new Exception("Login já se encontra em uso, escolha outro");

        String encryptedPassword = new BCryptPasswordEncoder().encode(dados.senha());
        
        Usuario newUser = new Usuario(dados);

        this.repository.save(newUser);

    }
}

