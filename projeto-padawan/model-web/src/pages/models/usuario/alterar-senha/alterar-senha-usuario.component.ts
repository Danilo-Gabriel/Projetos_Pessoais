
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlterarSenhaService } from './service/alterar-senha.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppMessageService } from 'src/shared/components-services/app-message/app-message.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/shared/components-services/services/localStorage/localStorage.service';


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
    private storage : LocalStorageService,
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

    this.idUsuario = this.storage.returnLoginUser();

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






