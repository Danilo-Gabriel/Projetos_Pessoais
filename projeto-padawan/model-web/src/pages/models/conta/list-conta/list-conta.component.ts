import { Component, OnInit } from '@angular/core';
import { ListConta, } from '../dto/listarConta';
import { Observable, catchError, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Conta } from '../dto/Conta';
import { ListContaService } from './service/list-conta.service';
import { AppMessageService } from 'src/shared/components-services/app-message/app-message.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-list-conta',
  templateUrl: './list-conta.component.html',
  styleUrls: ['./list-conta.component.scss'],
  providers : [ConfirmationService]
})
export class ListContaComponent implements OnInit {

  listCont! : ListConta[];
  listConta$ : Observable<ListConta[]>;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private service : ListContaService,
    private message : AppMessageService,
    private confirmationService: ConfirmationService,
  ){

    this.listConta$= this.service.list()
      .pipe(
        catchError(error => {
          this.message.showError(error)
          return of([])
    })
  );

  }



  ngOnInit(): void {

    this.obterDadosUsuario();
  }




  onAdd(){

    this.router.navigate(['new'], {relativeTo : this.route})

  }

  onEdit(conta: Conta){

    this.router.navigate([`edit/${conta.id}`], {relativeTo : this.route})
  }

  traduzirSituacao(situacao : boolean) : string{

    return situacao ? 'ativo' : 'inativo';
  }

  private obterDadosUsuario() {
    this.service.obterUsuario().subscribe(
        data => {
          console.log(this.listCont)
          //debugger
            this.listCont = data;
        },
        error =>{
            console.error('ERROR', error);
        }
    )
}

confirmDeleteTEST(){
  console.log('TESTE')
}

confirmDelete(event: Event, conta : Conta) {
  console.log("TETET")
  this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Tem certeza que deseja excluir usuário? ',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.service.deletarConta(`${conta.id}`)
          this.message.showInfo("Usuario Excluido")
          window.location.reload();
      },
      reject: () => {
          this.message.showError("You have rejected")
      }
})
}




}




