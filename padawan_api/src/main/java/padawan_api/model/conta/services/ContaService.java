package padawan_api.model.conta.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import padawan_api.model.conta.dto.ListarContaDTO;
import padawan_api.model.conta.dto.RegistrarContaDTO;
import padawan_api.model.conta.repository.Conta;
import padawan_api.model.conta.repository.ContaRepository;

@Service
public class ContaService {
    
    @Autowired
    private ContaRepository repository;

    public void registrarContaClassService(RegistrarContaDTO dados) throws Exception{

        Optional<Conta> contaOptional =  repository.findByNomeConta(dados.nomeConta());

        if(contaOptional.isPresent()){
            throw new Exception("Nome da conta já se encontra em uso");
        }
        else{
            Conta conta = new Conta(dados);

            repository.save(conta);
        }
    }

    public List<ListarContaDTO> listarContaClassService(){
        
        List<Conta> contas = repository.findAll();
        List<ListarContaDTO> listarContasDTO = contas.stream()
                .map(ListarContaDTO::new)
                .collect(Collectors.toList());
        return listarContasDTO;
    }


  
  
}
