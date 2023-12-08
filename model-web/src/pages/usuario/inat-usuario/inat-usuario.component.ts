import { LocalStorageService } from './../../../shared/components/services/localStorage/localStorage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from '../dto/detalhamentoUsuario';
import { InatService } from './service/inat.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';

@Component({
  selector: 'app-inat-usuario',
  templateUrl: './inat-usuario.component.html',
  styleUrls: ['./inat-usuario.component.scss']
})
export class InatUsuarioComponent implements OnInit {

  form!: FormGroup;

  private routeSub!: Subscription;
  private idUsuario!: Usuario;


  constructor(
    private localstorageService : LocalStorageService,
    private service : InatService,
    private message : AppMessageService,
    private formBuilder : FormBuilder,
  ){


    this.form = this.formBuilder.group({
      senhaAntiga: ['', Validators.required],
      senhaNova: ['', Validators.required]
    });


  }


  ngOnInit(): void {

      this.idUsuario = this.localstorageService.dadosUsuarioLogado();


    }

    onSubmit(){

      if(this.form.valid){


        console.log(this.idUsuario.id)
        debugger
        this.service.trocarSenha({
          id : this.idUsuario.id,
          senhaAntiga: this.form.value.senhaAntiga,
          senhaNova : this.form.value.senhaNova,
        });



      }else{
        this.message.showError("ERROR EM ATUALIZAR O USUARIO")
      }

    }




    onCancel(){


    }


  }






