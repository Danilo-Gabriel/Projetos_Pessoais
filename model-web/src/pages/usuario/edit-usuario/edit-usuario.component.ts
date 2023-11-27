import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUsuarioService } from './service/edit-usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit {

  form!: FormGroup;

  private routeSub!: Subscription;
  private idUsuario!: number

  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private editService : EditUsuarioService,
    private route: ActivatedRoute,
  )

    {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      //senha: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.idUsuario = params['idUsuario'];
      //fazer requisição para o backend para buscar o usuário do id especificado.
    });

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
