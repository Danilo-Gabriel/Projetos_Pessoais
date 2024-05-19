import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUsuarioService } from './service/edit-usuario.service';
import { Subscription } from 'rxjs';
import { Usuario } from '../dto/DadosUsuario';
import { AppMessageService } from 'src/shared/services/app-message/app-message.service';
import { LocalStorageService } from 'src/shared/services/localStorage/localStorage.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit {

  form!: FormGroup;

  situacao?: string;
  ativo? : boolean;

  ativoLabel?: string
  inativoLabel?: string


  selectedImage: File | null = null;
  uploadedFiles: any[] = [];



  private routeSub!: Subscription;
  private idUsuario!: string;
  private usuario! : Usuario;

  private record: Usuario = {
    id: '',
    nomeLogin: '',
    nomeCompleto: '',
    email: '',
    ativo: true
  };


  constructor(
    private formBuilder : FormBuilder,
    private service : EditUsuarioService,
    private route: ActivatedRoute,
    private router : Router,
    private location : Location,
    private message : AppMessageService,
    localstorage : LocalStorageService

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
          email: this.usuario.email
        });
      },
        error => {
          console.error("ERROR ", error);
        });
    });

  }

  onSelect(event: any) {

    const fileList: FileList = event.files;
    if (fileList.length > 0) {
      this.selectedImage = fileList[0];
      console.log('Arquivo selecionado:', this.selectedImage);
    }
  }


  onSubmit(){

    if(this.form.value && this.selectedImage){
      if(this.ativo === true || this.situacao === 'Ativo'){
          this.record.id = this.usuario.id
          this.record.nomeLogin = this.form.value.nomeLogin,
          this.record.nomeCompleto = this.form.value.nomeCompleto,
          this.record.email = this.form.value.email,
          this.record.ativo = true
          console.log(this.record)
        this.service.atualizarDados(this.record, this.selectedImage).subscribe({
          next : (dados) => {
            this.message.showSuccess('Usuário alterado com sucesso ');
            this.location.back()
          },
          error : (err) => {
            this.message.showError(`${err.error}`)
          }
        })
      }

      if(this.ativo === false || this.situacao === 'Inativo'){

        this.record.id = this.usuario.id
          this.record.nomeLogin = this.form.value.nomeLogin
          this.record.nomeCompleto = this.form.value.nomeCompleto
          this.record.email = this.form.value.email
          this.record.ativo = false
          console.log(this.record)
          this.service.atualizarDados(this.record, this.selectedImage).subscribe({

            next : (dados) => {
              this.message.showSuccess('Usuário alterado com sucesso');
              this.location.back()
            },
            error : (err) => {
              this.message.showError(`${err.error}`)
            }
          })

    }

    }
    else{

      if(this.form.valid){

        if(this.ativo === true || this.situacao === 'Ativo'){
          this.record.id = this.usuario.id
          this.record.nomeLogin = this.form.value.nomeLogin
          this.record.nomeCompleto = this.form.value.nomeCompleto
          this.record.email = this.form.value.email
          this.record.ativo = true
          console.log(this.record)
        this.service.atualizarDadosUser(this.record).subscribe({
          next : (dados) => {
            this.message.showSuccess('Usuário alterado com sucesso');
            this.location.back()
          },
          error : (err) => {
            this.message.showError(`${err.error}`)
          }
        })
      }

      if(this.ativo === false || this.situacao === 'Inativo'){

        this.record.id = this.usuario.id
          this.record.nomeLogin = this.form.value.nomeLogin
          this.record.nomeCompleto = this.form.value.nomeCompleto
          this.record.email = this.form.value.email
          this.record.ativo = false
          console.log(this.record)
          this.service.atualizarDadosUser(this.record).subscribe({
            next : (dados) => {
              this.message.showSuccess('Usuário alterado com sucesso');
              this.location.back()
            },
            error : (err) => {
              this.message.showError(`${err.error}`)
            }
          })


    }
    }
  }

    }

    ativar(){
      this.ativo = true
    }
    inativar(){
      this.ativo = false
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



    navigateTo(route: string) {
      this.router.navigate([route]);
    }

}
