import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Usuario } from 'src/pages/models/usuario/dto/DadosUsuario';
import { AppMessageService } from 'src/shared/services/app-message/app-message.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

private backendURL = environment.endPoint;

private readonly Url = `${this.backendURL}/usuario/List/img`;


constructor(
  private http : HttpClient,
  private messagem : AppMessageService
) { }


ngOnInit(): void {
}


}
