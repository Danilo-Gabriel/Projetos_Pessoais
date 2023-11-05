import { environment } from './../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ErrorDialogComponent } from 'src/shared/components/error-dialog/error-dialog.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, public http: HttpClient, public dialog: MatDialog) {}



  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      const backendUrl = environment.endPoint;
      const apiUrl = `${backendUrl}/auth/login`;

      this.http.post(apiUrl, formData).subscribe(
        (response) => {
        this.onSuccessfulLogin()
        },
        (error) => {
          this.onAviso("LOGIN INCORRETO")
        }
      );
    }
  }

  onSuccessfulLogin() {

    this.router.navigate(['/pages/home']);
  }


 onAviso(avisoMsg: string)
 {
  this.dialog.open(ErrorDialogComponent, {
   data: avisoMsg
  });
}


}
