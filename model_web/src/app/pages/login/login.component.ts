import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from 'src/app/models/LoginModel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor( private formBuilder : FormBuilder,
    private router : Router ){ }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group(

        {
          username: ['', [Validators.required]],
          password: ['', [Validators.required]]

        }
      );
  }
  submitLogin()
  {
    debugger
    var dadosLogin = this.loginForm.getRawValue() as loginModel;

    /*
    this.LoginService.LoginUsuario(dadosLogin)

      /*.subscribe(
      token =>
      {
      debugger
      var nossoToken = Token
      },
      error => {

    })

       */

  }
}

