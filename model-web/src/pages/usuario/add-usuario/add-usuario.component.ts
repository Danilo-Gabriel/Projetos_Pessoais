import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AddUsuarioService } from './service/add-usuario.service';


@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss']
})
export class AddUsuarioComponent implements OnInit {

  form!: FormGroup;

  constructor(
    //private router : Router,
    private formBuilder : FormBuilder,
    private addService : AddUsuarioService,
    private location : Location)

    {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });

  }

  ngOnInit(): void {


  }

  onSubmit(){

    if(this.form.valid){
      this.addService.save(this.form.value);
    }else{
      console.log("ERRO, TRATAR DEPOIS")
    }

  }

  onCancel(){

    this.location.back();
    //this.router.navigate(['pages/home/list-usuario']);

  }


}
