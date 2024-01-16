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
  visibleRecuperarSenha: boolean = false;

  constructor(
    private loginService : LoginService,
    private formBuilder: FormBuilder,


  ) {

  }

  mostrarRecuperarSenha() {
    this.visibleRecuperarSenha = true;
  }

  recuperarSenha() {
    // Lógica para enviar e-mail de recuperação de senha
    this.visibleRecuperarSenha = false;
  }

  cancelarRecuperacaoSenha() {
    this.visibleRecuperarSenha = false;
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

