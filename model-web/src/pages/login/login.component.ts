import { environment } from './../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { ErrorDialogComponent } from 'src/shared/components/error-dialog/error-dialog.component';
import { LoginService } from './services/login.service';

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


      this.http.post<any>(apiUrl, formData, { responseType: 'text' as 'json'})
      // .pipe(finalize(() => {}))
      .subscribe(
        (response) => {
          this.onAviso(response)
          this.onSuccessfulLogin();
        },
        (error) => {
          // debugger
          console.log("error: ", error)
          this.onAviso(error.error);
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
