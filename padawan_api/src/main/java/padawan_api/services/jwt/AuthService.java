package padawan_api.services.jwt;



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

     
}

