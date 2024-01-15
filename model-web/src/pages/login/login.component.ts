import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from './services/login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;
  visible: boolean = false;
  esqueciSenhaAtivo: boolean = false;

  constructor(
    private loginService : LoginService,
    private formBuilder: FormBuilder,


  ) {

  }

  mostrarRecuperarSenha() {
    this.esqueciSenhaAtivo = true;
  }

  recuperarSenha() {
    // Lógica para enviar e-mail de recuperação de senha
    this.esqueciSenhaAtivo = false;
  }

  cancelarRecuperacaoSenha() {
    this.esqueciSenhaAtivo = false;
  }




  ngOnInit(): void {

    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });


  }

  onSubmit() {

      this.loginService.efetuarLogin(this.form.value);
    }

    showDialogEsqueciSenha() {
      this.visible = true;
  }

  }

