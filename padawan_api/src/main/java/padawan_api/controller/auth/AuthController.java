package padawan_api.controller.auth;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import padawan_api.model.conta.dto.RegistrarContaDTO;
import padawan_api.model.email.dto.EmailDTO;
import padawan_api.model.email.dto.RecupararSenhaPorEmailDTO;
import padawan_api.model.email.services.EmailService;
import padawan_api.model.usuario.dto.AlterarSenhaUsuarioLogadoDTO;
import padawan_api.model.usuario.dto.EfetuarLoginDTO;
import padawan_api.model.usuario.dto.LoginResponseDTO;
import padawan_api.model.usuario.dto.RegistrarUsuarioDTO;
import padawan_api.model.usuario.dto.UsuarioDTO;
import padawan_api.model.usuario.repository.Usuario;
import padawan_api.model.usuario.repository.UsuarioRepository;
import padawan_api.model.usuario.services.UsuarioService;
import padawan_api.services.security.TokenService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
//@CrossOrigin(origins = ("*"))
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    UsuarioService usuarioService;

    @Autowired
    private EmailService emailService;


    public AuthController(EmailService emailService){
      this.emailService = emailService;
    }

    @Autowired
    private AuthenticationManager manager;

   // @Autowired JWT
   // private UsuarioService usuarioService;

    @Autowired
    private UsuarioRepository repository;


    @Autowired
    private TokenService tokenService;


    @PostMapping("/login")
    public ResponseEntity efetuarLogin(@RequestBody EfetuarLoginDTO dados){

        try {

        var usernamePassword = new UsernamePasswordAuthenticationToken(dados.login(), dados.senha());
        var auth =  manager.authenticate(usernamePassword);

        var token = tokenService.gerarToken((Usuario) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        

    }

    @PostMapping("/registrar")
    public ResponseEntity register(@RequestBody @Valid RegistrarUsuarioDTO dados){
        
        if(this.repository.findByNomeLogin(dados.nomeLogin()) != null) return ResponseEntity.badRequest().build();

        String encryptedPassword = new BCryptPasswordEncoder().encode(dados.senha());
        
        Usuario newUser = new Usuario(dados);

        this.repository.save(newUser);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

      @PutMapping("/alterarSenha")
  public ResponseEntity<?> alterarSenhaClassController(@RequestBody AlterarSenhaUsuarioLogadoDTO dados){

    try{


     this.usuarioService.alterarSenhaClassService(dados);
      
      return ResponseEntity.ok().build();
    }catch(Exception e){

      return ResponseEntity.badRequest().body(e.getMessage());
    }
    
  }

  @PostMapping("/recuperar-senha")
    public ResponseEntity<?> recuperarSenhaPorEmailClassController(@RequestBody EmailDTO email){

        try {

          this.emailService.enviarNovaSenhaPorEmailClassService(email);

          return ResponseEntity.ok().build();
         
        } catch (Exception e) {
          System.out.println(e.getMessage());
          return ResponseEntity.badRequest().body(e.getMessage());
        }

    
    }


    @GetMapping("{hash}")
    public ResponseEntity<?> validarHashUsuarioClassController(@PathVariable String hash){

      try {
        
       UsuarioDTO usuarioDTO = this.emailService.validarHashUsuarioClassService(hash);

        return ResponseEntity.ok().body(usuarioDTO);

      } catch (Exception e) {
          return ResponseEntity.badRequest().body(e.getMessage());
      }
     
      
    }


    @PutMapping("/recuperarSenha")
    public ResponseEntity<?> atualizarSenhaViaEmailClassController(@RequestBody RecupararSenhaPorEmailDTO dados){
      
      try {
        
        this.emailService.atualizarSenhaViaEmailClassService(dados);

        return ResponseEntity.ok().build();
      } catch (Exception e) {
       
        return ResponseEntity.badRequest().body(e.getMessage());
      }
    }
    
    /* SEM JWT
    @PostMapping("/registrar")
    @Transactional
    public ResponseEntity<?> registrarUsuarioClassController(@RequestBody @Valid RegistrarUsuarioDTO dados){

        try{
            this.usuarioService.registrarUsuarioClassService(dados);
           
            return ResponseEntity.status(HttpStatus.CREATED).body(dados);
        }

        catch(Exception e){
        
            return ResponseEntity.badRequest().body(e.getMessage());
        }


    }
    */
}
