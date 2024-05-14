import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AddUsuarioService } from './service/add-usuario.service';
import { AppMessageService } from 'src/shared/services/app-message/app-message.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss']
})
export class AddUsuarioComponent implements OnInit {

  form!: FormGroup;
  selectedImage: File | null = null;

  uploadedFiles: any[] = [];

  constructor(
    //private router : Router,
    private formBuilder : FormBuilder,
    private service : AddUsuarioService,
    private router : Router,
    private messagem : AppMessageService
  )

    {
    this.form = this.formBuilder.group({
      nomeLogin: ['', Validators.required],
      senha: ['', Validators.required],
      nomeCompleto: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

  ngOnInit(): void {


  }

  onSelect(event: any) {

    const fileList: FileList = event.files;
    if (fileList.length > 0) {
      this.selectedImage = fileList[0];
      console.log('Arquivo selecionado:', this.selectedImage);
    }
  }


  onSubmit() : void{

    console.log(this.selectedImage)
    debugger
    if(this.form.valid && this.selectedImage){
      this.service.saveImg(this.form.value, this.selectedImage).subscribe({
        next : (dados) => {
            this.messagem.showSuccess('Usuário Cadastrado');
            this.router.navigate(['/pages/usuario']);
        },
        error: (err) => {
          this.messagem.showError(`${err.error}`)
        }
      })

    }
   else{

    if(this.form.valid){
      this.service.saveUsuario(this.form.value).subscribe({
        next : (dados) => {
            this.messagem.showSuccess('Usuário Cadastrado');
            this.router.navigate(['/pages/usuario']);
        },
        error: (err) => {
          this.messagem.showError(`${err.error}`)
        }
      })
    }
    }

  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }


}


