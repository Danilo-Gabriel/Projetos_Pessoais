import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required], // Deve corresponder a "formControlName="login"" no HTML
      senha: ['', Validators.required] // Deve corresponder a "formControlName="senha"" no HTML
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      const backendUrl = 'http://localhost:8080';
      const apiUrl = `${backendUrl}/usuarios/cadastrar`;

      this.http.post(apiUrl, formData).subscribe(
        (response) => {
          console.log("usuário cadastrado: ", response);
        },
        (error) => {
          console.log(formData);
          console.log("DEU ERRADO");
        }
      );
    }
  }
}
