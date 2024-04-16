import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, catchError, of } from 'rxjs';
import { Conta } from '../dto/Conta';
import { EditContaService } from './service/edit-conta.service';
import { Usuario } from '../../usuario/dto/DadosUsuario';
import { AppMessageService } from 'src/shared/services/app-message/app-message.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-edit-conta',
  templateUrl: './edit-conta.component.html',
  styleUrls: ['./edit-conta.component.scss']
})


export class EditContaComponent implements OnInit {

  form!: FormGroup;


  private routeSub!: Subscription;
  private idConta!: string;
  private conta! : Conta;
  private usuarioAtual! : string;
  listUserNames: Usuario[] = [];

  selectUser: Usuario[] | undefined;



  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private route: ActivatedRoute,
    private service : EditContaService,
    private message : AppMessageService

  ) {

      this.form = this.formBuilder.group({
      nomeConta: ['', Validators.required],
      usuarioAssociado : this.selectUser,
      pessoa: ""
    });


   }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.idConta = params['idConta']
      this.service.buscarDadosConta(params['idConta']).subscribe(
        dados => {
          this.conta = dados
          console.log(dados)
          this.usuarioAtual = dados.pessoa
          console.log(this.usuarioAtual)
          this.form.patchValue({
          nomeConta: this.conta.nomeConta,
          pessoa : this.conta.pessoa
          
        });
      },
        error => {
          console.error("Error", error);
        });
    });

    this.service.list().subscribe(
      usuarios => {
        this.listUserNames = usuarios;
      },
      error => {
        console.error("Error", error);
      }
    );


  }

 onSubmit(){

  if(this.form.value.usuarioAssociado != null){
    if(this.form.value != null){

      debugger
      this.service.associarUsuario({
        conta_id : this.idConta,
        usuario_id : this.form.value.usuarioAssociado.id,
      }),

      this.service.atualizarDadosConta({
        id : this.idConta,
        nomeConta : this.form.value.nomeConta,
        pessoa : this.form.value.usuarioAssociado.nomeCompleto
      })
    }
  }
  else {
    if(this.form.value != null){
      this.service.atualizarDadosConta({
        id : this.idConta,
        nomeConta : this.form.value.nomeConta,
        pessoa : this.form.value.pessoa
      })
    }
  }

 }

 
  navigateTo(route: string) {
    this.router.navigate([route]);
  }



}
