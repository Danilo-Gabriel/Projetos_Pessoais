import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUsuarioService } from './service/edit-usuario.service';
import { Subscription } from 'rxjs';
import { Usuario } from '../dto/detalhamentoUsuario';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit {

  form!: FormGroup;

  private routeSub!: Subscription;
  private idUsuario!: string;
  private usuario! : Usuario;

  constructor(
    private formBuilder : FormBuilder,
    private service : EditUsuarioService,
    private route: ActivatedRoute,
    private location : Location,
    private message : AppMessageService
  )

    {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });

  }

  ngOnInit(): void {

    this.routeSub = this.route.params.subscribe(params => {
      this.idUsuario = params['idUsuario']
      this.service.buscarID(params['idUsuario']).subscribe(
        dados => {
          this.usuario = dados
          this.form.patchValue({
          login: this.usuario.login
        });
    });
    });

  }

  onSubmit(){

    if(this.form.valid){

      this.service.atualizar({
        id : this.idUsuario,
        login : this.form.value.login,
        senha : this.form.value.senha,
      });

    }else{
      this.message.showError("ERROR EM ATUALIZAR O USUARIO")
    }

  }




  onCancel(){

    this.location.back()
  }


}
