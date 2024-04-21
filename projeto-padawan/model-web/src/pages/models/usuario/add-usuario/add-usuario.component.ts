import { Component, OnInit } from '@angular/core';
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
  selectedImage: File | undefined;

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
  onImageSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.selectedImage = fileList[0];
    }
  }

  onSubmit() : void{

    if(this.form.valid && this.selectedImage){

      this.service.saveImg(this.form.value, this.selectedImage).subscribe({
        next : (dados) => {
            this.messagem.showSuccess('Usuário Cadastrado');
            this.router.navigate(['/pages/home/list-usuario']);
        },
        error: (err) => {
          this.messagem.showError(`${err.error}`)
        }
      })

    }
    /*
    else if (this.form.valid){


      //this.service.save(this.form.value);

    }
    */
   else{
      this.messagem.showError("DESCOBRE O ERRO AI DEV");
    }

  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }


}
