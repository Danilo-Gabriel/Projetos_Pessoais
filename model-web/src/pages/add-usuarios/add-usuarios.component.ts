import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CadastroUsuario } from './model/CadastroUsuario';
import { environment } from 'src/environment/environment';
import { first } from 'rxjs';
import { ErrorDialogComponent } from 'src/shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-usuarios',
  templateUrl: './add-usuarios.component.html',
  styleUrls: ['./add-usuarios.component.scss']
})
export class AddUsuariosComponent implements OnInit {

  backendURL = environment.endPoint;



  private readonly API = `${this.backendURL}/usuarios/cadastrar`

  form!: FormGroup;

  constructor( private router : Router, private http : HttpClient, private formBuilder : FormBuilder, public dialog: MatDialog){
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(){

    if(this.form.valid){
      this.save(this.form.value);
    }else{
      console.log("ERRO, TRATAR DEPOIS")
    }

  }

  save(record:CadastroUsuario){

    return this.http.post<CadastroUsuario>(this.API, record)
    .subscribe(
      (response) => {
      this.onAviso("Usuario Cadastrado");
       this.router.navigate(['/pages/home/list']);
    },
    (error) => {
      this.onAviso(error.error);
    }
  );
  }



  onCancel(){

    this.router.navigate(['/pages/home/list']);

  }

  onAviso(avisoMsg: string)
  {
   this.dialog.open(ErrorDialogComponent, {
    data: avisoMsg
   });
 }

}
