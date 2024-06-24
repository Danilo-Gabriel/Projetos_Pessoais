package padawan_api.model.usuario.document.elasticsearch;

import jakarta.persistence.*;


import lombok.*;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;
import org.springframework.data.elasticsearch.annotations.Setting;
import padawan_api.model.conta.repository.Conta;
import padawan_api.model.usuario.repository.Usuario;


@Document(indexName = "usuario")
@Setting(settingPath = "static/es.settings.json")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class AnotacaoUsuario{

    @Id
    @Field(type = FieldType.Keyword)
    private Long id;

    @Field(type = FieldType.Text)
    private String nomeCompleto;

    @Field(type = FieldType.Text)
    private String email;

    @Field(type = FieldType.Text)
    private String nomeLogin;

    @Field(type = FieldType.Boolean)
    private Boolean ativo;

    @Field(type = FieldType.Text)
    private String hash;

    @Field(type = FieldType.Object)
    private Conta conta;


    public AnotacaoUsuario(Usuario usuario){
        this.id = usuario.getId();
        this.nomeCompleto = usuario.getNomeCompleto();
        this.nomeLogin = usuario.getNomeLogin();;
        this.email = usuario.getEmail();
        this.hash = usuario.getHash();
        this.conta = usuario.getConta();
        this.ativo = usuario.getAtivo();
    }


}
