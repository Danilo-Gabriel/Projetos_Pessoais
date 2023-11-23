import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUsuarioService } from './service/add-usuario.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss']
})
export class AddUsuarioComponent implements OnInit {

  form!: FormGroup;

  items: MenuItem[] | undefined;
  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private addService : AddUsuarioService)

    {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });

  }

  ngOnInit(): void {

    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/pages/home'},
      { label: 'Listar Usuario', icon: 'pi pi-fw pi-pencil', routerLink: '/pages/home/list-usuario'},
      { label: 'logout', icon: 'pi pi-fw pi-home', routerLink: '/pages/'},
  ];


  }

  onSubmit(){

    if(this.form.valid){
      this.addService.save(this.form.value);
    }else{
      console.log("ERRO, TRATAR DEPOIS")
    }

  }




  onCancel(){

    this.router.navigate(['pages/home/list-usuario']);

  }


}
