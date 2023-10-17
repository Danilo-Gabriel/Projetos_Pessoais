/*

import { EnvironmentInjector, Injectable } from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";



@Injectable(
    {
        providedIn: "root"
    }
)

export class LoginService {

  constructor(private httpCLient: HttpClient) {
  }
    private readonly baseURL = environment

  LoginUsuario(objeto:any){
    return this.httpCLient.post<any>(`${this.baseURL}/CriarTokenIndetity/`, objeto)
  }
}
*/