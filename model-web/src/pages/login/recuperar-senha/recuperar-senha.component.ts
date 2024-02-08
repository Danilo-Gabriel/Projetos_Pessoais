import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit {

  form!: FormGroup;

  value!: string;

  constructor(
    private formBuilder : FormBuilder
  ) {

    this.form = this.formBuilder.group({
      codigo: ['', Validators.required],
      novaSenha: ['', Validators.required],
      confirmarSenha:['', Validators.required]
    });

  }

  ngOnInit() {
  }

}
