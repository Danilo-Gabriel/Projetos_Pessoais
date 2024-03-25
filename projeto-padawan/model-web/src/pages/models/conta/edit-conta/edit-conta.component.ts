import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Conta } from '../dto/Conta';
import { EditContaService } from './service/edit-conta.service';

@Component({
  selector: 'app-edit-conta',
  templateUrl: './edit-conta.component.html',
  styleUrls: ['./edit-conta.component.scss']
})
export class EditContaComponent implements OnInit {

  form!: FormGroup;

  private routeSub!: Subscription;
  private idUsuario!: string;
  private conta! : Conta;



  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private route: ActivatedRoute,
    private service : EditContaService

  ) {

      this.form = this.formBuilder.group({
      nomeConta: ['', Validators.required],
      usuarioAssociado: ''
    });
   }

  ngOnInit() {

    this.routeSub = this.route.params.subscribe(params => {
      this.idUsuario = params['idUsuario']
      this.service.buscarDadosUser(params['idUsuario']).subscribe(
        dados => {
          this.conta = dados;
         // this.situacao = this.usuario.ativo ? this.ativoLabel : this.inativoLabel
          this.form.patchValue({
          nomeLogin: this.conta.nomeConta,
         
        });
    });

    });
  }


 onSubmit(){

 }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }




}
