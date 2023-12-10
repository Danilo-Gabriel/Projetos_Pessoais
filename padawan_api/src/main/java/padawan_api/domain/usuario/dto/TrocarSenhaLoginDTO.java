package padawan_api.domain.usuario.dto;
   
import jakarta.validation.constraints.NotBlank;
import padawan_api.domain.usuario.Usuario;

public record TrocarSenhaLoginDTO(


        @NotBlank
        Long id,
        String senhaAtual,
        String novaSenha,
        String confirmarSenha

       ) {


}

    

