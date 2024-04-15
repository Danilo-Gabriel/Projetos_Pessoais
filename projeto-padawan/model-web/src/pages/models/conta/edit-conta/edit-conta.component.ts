import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, catchError, of } from 'rxjs';
import { Conta } from '../dto/Conta';
import { EditContaService } from './service/edit-conta.service';
import { Usuario } from '../../usuario/dto/DadosUsuario';
import { AppMessageService } from 'src/shared/services/app-message/app-message.service';

interface City {
  name: string;
  code: string;
}

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

  listUserNames: Usuario[] = [];

  selectUser: Usuario | undefined;



  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private route: ActivatedRoute,
    private service : EditContaService,
    private message : AppMessageService

  ) {

      this.form = this.formBuilder.group({
      nomeConta: ['', Validators.required]
     // usuarioAssociado: ''
    });


   }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.idUsuario = params['idConta']
      //debugger
      this.service.buscarDadosConta(params['idConta']).subscribe(
        dados => {
          this.conta = dados;
         // this.situacao = this.usuario.ativo ? this.ativoLabel : this.inativoLabel
          this.form.patchValue({
          nomeConta: this.conta.nomeConta

        });
      },
        error => {
          console.error("Error", error);
        });
    });

    this.service.list().subscribe(
      usuarios => {
        this.listUserNames = usuarios;
        debugger
        console.log(this.listUserNames)
      },
      error => {
        console.error("Error", error);
      }
    );
    

  }


 onSubmit(){

  if(this.form.value != null){
      this.service.atualizarDadosConta({
        id : this.idUsuario,
        nomeConta : this.form.value.nomeConta


      })
  }

 }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }



}
