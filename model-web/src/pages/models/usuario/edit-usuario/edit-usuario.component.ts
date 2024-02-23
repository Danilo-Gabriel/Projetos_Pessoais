import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EditUsuarioService } from './service/edit-usuario.service';
import { Subscription } from 'rxjs';
import { Usuario } from '../dto/DadosUsuario';
import { AppMessageService } from 'src/shared/components-services/app-message/app-message.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit {

  form!: FormGroup;

  situacao!: string | undefined;

  ativoLabel!: string
  inativoLabel!: string



  private routeSub!: Subscription;
  private idUsuario!: string;
  private usuario! : Usuario;

  constructor(
    private formBuilder : FormBuilder,
    private service : EditUsuarioService,
    private route: ActivatedRoute,
    private location : Location,
    private message : AppMessageService

  )

    {

      this.ativoLabel = 'Ativo'
      this.inativoLabel = 'Inativo'

      this.form = this.formBuilder.group({
        nomeLogin: ['', Validators.required],
        nomeCompleto: ['', Validators.required],
        email: ['', Validators.required]
      });
  }

  ngOnInit(): void {

    this.routeSub = this.route.params.subscribe(params => {
      this.idUsuario = params['idUsuario']
      this.service.buscarDadosUser(params['idUsuario']).subscribe(
        dados => {
          this.usuario = dados;
          this.situacao = this.usuario.ativo ? this.ativoLabel : this.inativoLabel
          this.form.patchValue({
          nomeLogin: this.usuario.nomeLogin,
          nomeCompleto: this.usuario.nomeCompleto,
          email: this.usuario.email,
        });
    });

    });


  }

  onSubmit(){

    if(this.form.value){

        if(this.situacao === 'Ativo'){

          this.service.atualizarLoginUser({
                id : this.idUsuario,
                nomeLogin : this.form.value.nomeLogin,
                nomeCompleto : this.form.value.nomeCompleto,
                email : this.form.value.email,
                ativo : true
              });

          }

        if(this.situacao === 'Inativo'){

          this.service.atualizarLoginUser({
            id : this.idUsuario,
            nomeLogin : this.form.value.nomeLogin,
            nomeCompleto : this.form.value.nomeCompleto,
            email : this.form.value.email,
            ativo : false
          });

      }

     }

    }


    // if(this.form.value){

    //   this.service.atualizarLoginUser({
    //     id : this.idUsuario,
    //     loginAtual : this.form.value.loginAtual,
    //     novoLogin : this.form.value.novoLogin
    //   });


    // if(this.teste.value){




    // }

    // }else{
    //   this.message.showError("ERROR EM ATUALIZAR O USUARIO")
    // }



  onCancel(){

    this.location.back()
  }


}
