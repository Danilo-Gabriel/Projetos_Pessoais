
package padawan_api.model.conta.repository;




import java.io.Serializable;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import padawan_api.model.conta.dto.AtualizarContaDTO;
import padawan_api.model.conta.dto.RegistrarContaDTO;
import padawan_api.model.conta.dto.UserRole;
import padawan_api.model.usuario.repository.Usuario;

@Entity(name = "Conta")
@Table(name = "contas")
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Conta implements Serializable {

    private static final String CAMPO_ID = "id";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = CAMPO_ID)
    private Long id;

    @NotNull
    @Size(min = 1, max = 80)
    @Column(name = "nome_conta")
    private String nomeConta;

    @Enumerated(EnumType.STRING)
    @Column(name = "perfil_conta")
    private UserRole role;

    @Column(name = "associacao_status")
    private Boolean associacaoStatus;


    @ManyToOne
    @JoinColumn(name = "usuario_id", referencedColumnName = CAMPO_ID)
    private Usuario usuario;

    @NotNull
    @Column(name = "situacao_conta")
    private Boolean situacao;

    public Conta (RegistrarContaDTO dados){
        this.nomeConta = dados.nomeConta();
        this.role = dados.role();
        this.situacao = true;
        
    }

    public boolean isSituacao(){
        return this.situacao;
    }

    public void atualizarContaClassJPA(AtualizarContaDTO dados) throws Exception{
          
            if(dados != null){
                this.nomeConta = dados.nomeConta();
            }
            else{
                throw new Exception("Dados Nulos");
            }
       
    }
    
}
