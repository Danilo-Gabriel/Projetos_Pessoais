
import { LocalStorageService } from '../../../shared/components/services/localStorage/localStorage.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlterarSenhaService } from './service/alterar-senha.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alterSenha-usuario',
  templateUrl: './alterar-senha-usuario.component.html',
  styleUrls: ['./alterar-senha-usuario.component.scss']
})
export class AlterarSenhaComponent implements OnInit {

  form!: FormGroup;

  private routeSub!: Subscription;
  private idUsuario! : any;



  constructor(
    private localstorageService : LocalStorageService,
    private service : AlterarSenhaService,
    private message : AppMessageService,
    private formBuilder : FormBuilder,
    private router : Router

  ){


    this.form = this.formBuilder.group({
      senhaAtual:['',Validators.required],
      novaSenha: ['', Validators.required],
      confirmarSenha:['', Validators.required]
    });




  }


  ngOnInit(): void {

    this.idUsuario = this.localstorageService.dadosUsuarioLogado();

  }




    onSubmit(){


      if(this.form.valid){

        if(this.form.value.novaSenha === this.form.value.confirmarSenha){

          this.service.trocarSenha({
            id: this.idUsuario.id,
            senhaAtual: this.form.value.senhaAtual,
            novaSenha: this.form.value.novaSenha,
            confirmarSenha : this.form.value.confirmarSenha
          });

        }else{
          this.message.showError('As senha preenchidas não Coincidem')
        }

      }

      else{
        this.message.showError('Por favor, preencha todos os campos corretamente.');
      }

    }




    onCancel(){

      window.location.reload();
    }


  }






