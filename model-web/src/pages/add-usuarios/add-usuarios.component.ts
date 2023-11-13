import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CadastroUsuario } from './model/CadastroUsuario';
import { environment } from 'src/environment/environment';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-usuarios',
  templateUrl: './add-usuarios.component.html',
  styleUrls: ['./add-usuarios.component.scss']
})
export class AddUsuariosComponent implements OnInit {

  backendURL = environment.endPoint;



  private readonly API = `${this.backendURL}/usuarios/cadastrar`

  form: FormGroup;

  constructor( private router : Router, private http : HttpClient, private formBuilder : FormBuilder){
    this.form = this.formBuilder.group({
      login: [null],
      senha: [null]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(){

    this.save(this.form.value);
  }

  save(record:CadastroUsuario){

    return this.http.post<CadastroUsuario>(this.API, record).subscribe(result => console.log(result))
  }



  onCancel(){

    this.router.navigate(['/pages/home/list'])
  }

}
