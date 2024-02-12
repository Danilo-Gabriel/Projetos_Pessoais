package padawan_api.model.usuario.dto;


import jakarta.validation.constraints.NotBlank;


public record DadosAtualizaLoginDTO(

       
       
Long id,

String login,

String nome_completo,

String email,

String cpf,

boolean ativo

) {


}


