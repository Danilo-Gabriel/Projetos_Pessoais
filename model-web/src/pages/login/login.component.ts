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


  constructor(
    private loginService : LoginService,
    private formBuilder: FormBuilder,


  ) {

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
  }

