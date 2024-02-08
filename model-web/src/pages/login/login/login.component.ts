import { Location } from '@angular/common';
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

  public formLogin!: FormGroup;
  public formRecuperarSenha! : FormGroup

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

    this.loginService.recuperarSenha(this.formRecuperarSenha.value);

  }

  cancelarRecuperacaoSenha() {
    this.visibleRecuperarSenha = false;
  }




  ngOnInit(): void {

    this.formLogin = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });

    this.formRecuperarSenha = this.formBuilder.group({
      email: ['', Validators.required],
      url: "http://localhost:4200/pages/recuperar-senha"
    });

  }

  onSubmit() {

      this.loginService.efetuarLogin(this.formLogin.value);
    }

    showDialogEsqueciSenha() {
      this.visible = true;
  }

  }

