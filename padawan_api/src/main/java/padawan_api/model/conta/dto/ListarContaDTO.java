package padawan_api.model.conta.dto;

import padawan_api.model.conta.repository.Conta;
import padawan_api.model.usuario.dto.UserRole;

public record ListarContaDTO(

Long id,

String nomeConta,

UserRole role,

String pessoa,

Boolean situacao

) {

   public ListarContaDTO(Conta conta){
        this(conta.getId(), conta.getNomeConta(), conta.getRole(), (conta.getUsuario() != null) ? conta.getUsuario().getNomeCompleto() : null , conta.getSituacao());
    }


}
