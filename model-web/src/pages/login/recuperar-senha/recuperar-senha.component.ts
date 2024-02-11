import { Usuario } from './../../usuario/dto/DadosUsuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';
import { RecuperarSenhaService } from './services/recuperar-senha.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit {

  form!: FormGroup;
  value!: string;
  private routeSub!: Subscription;
  private hashUsuario!: string;
  usuario! : Usuario;
  id! : string

  constructor(
    private formBuilder : FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private message : AppMessageService,
    private recuperarSenhaService : RecuperarSenhaService,

  ) {

    this.form = this.formBuilder.group({
     // codigo: ['', Validators.required],
      id : '',
      novaSenha: ['', Validators.required],
      confirmarSenha:['', Validators.required]
    });

  }

  ngOnInit() {

    this.routeSub = this.route.params
    .subscribe(params => {
      this.hashUsuario = params['hashUsuario']
      this.recuperarSenhaService.validarHashUsuario(params['hashUsuario'])
      .subscribe(
        dados => {
          this.usuario = dados;
          this.id = dados.id;
          this.form.patchValue({
        });
        },
        error => {
          //this.message.showError(error.error);

        }
      );
    });


  }

  OnSubmit(){

    this.form.value.id = this.id
    this.recuperarSenhaService.alterarSenhaUsuario(this.form.value);
  }

}
