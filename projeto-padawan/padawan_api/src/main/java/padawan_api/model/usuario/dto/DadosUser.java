package padawan_api.model.usuario.dto;

import padawan_api.model.conta.dto.UserRole;

public record DadosUser(

Long id,
String nomeLogin,
String nomeCompleto,
String email,
String hash,
boolean ativo,
UserRole role,
String token

) {
    
}
