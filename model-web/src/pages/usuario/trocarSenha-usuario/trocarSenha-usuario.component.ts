
import { LocalStorageService } from '../../../shared/components/services/localStorage/localStorage.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrocarSenhaService } from './service/trocarSenha.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inat-usuario',
  templateUrl: './trocarSenha-usuario.component.html',
  styleUrls: ['./trocarSenha-usuario.component.scss']
})
export class TrocarSenhaUsuarioComponent implements OnInit {

  form!: FormGroup;

  private routeSub!: Subscription;
  private idUsuario! : any;



  constructor(
    private localstorageService : LocalStorageService,
    private service : TrocarSenhaService,
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

      this.router.navigate(['home']);
    }


  }






