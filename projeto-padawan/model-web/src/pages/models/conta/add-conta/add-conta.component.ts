import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddContaService } from './service/add-conta.service';
import { Router } from '@angular/router';


interface Role {
  name: string;
  code: string;

}
@Component({
  selector: 'app-add-conta',
  templateUrl: './add-conta.component.html',
  styleUrls: ['./add-conta.component.scss']
})
export class AddContaComponent implements OnInit {

  form!: FormGroup;

  roles: Role[] | undefined;

  selectedRole: Role | undefined;

  constructor(
    //private router : Router,
    private formBuilder : FormBuilder,
    private service : AddContaService,
    private router : Router

   // private location : Location
   )

    {
    this.form = this.formBuilder.group({
      nomeConta: ['', Validators.required],
      role : [null, Validators.required]

    });

  }

  ngOnInit(): void {
    this.roles = [
      { name: 'Administrador', code: 'ADMIN' },
      { name: 'Convencional', code: 'USER' },

  ];


  }

  onSubmit(){
    if(this.form.valid){

     this.service.save(this.form.value);

    }else{
      console.log("ERRO, TRATAR DEPOIS")
    }

  }

  onRoleChange(event: any) {
    // Atualiza o valor do campo 'role' no formulário quando um novo papel é selecionado
    this.form.patchValue({
      role: event.value.code
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
