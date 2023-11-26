import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditUsuarioService } from './service/edit-usuario.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private editService : EditUsuarioService)

    {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      //senha: ['', Validators.required]
    });

  }

  ngOnInit(): void {

  }

  onSubmit(){

    if(this.form.valid){
      this.editService.atualizar(this.form.value);
    }else{
      console.log("ERRO, TRATAR DEPOIS")
    }

  }




  onCancel(){

    this.router.navigate(['pages/home/list-usuario']);

  }


}
