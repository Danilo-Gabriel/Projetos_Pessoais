package padawan_api.domain.usuario.dto;


import jakarta.validation.constraints.NotBlank;


public record DadosAtualizaLoginUsuarioDTO(

         @NotBlank
        Long id,

        @NotBlank
        String loginAtual,

        @NotBlank
        String novoLogin
) {


}


