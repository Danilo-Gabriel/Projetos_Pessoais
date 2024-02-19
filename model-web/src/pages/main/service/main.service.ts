import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environment/environment';
import { Injectable } from '@angular/core';
import { environmentMinio } from 'src/environment/environmentMinio';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private UrlMinIO = environmentMinio.endpointMinio;
  private baseUrl = environment.endPoint;

constructor(
  private http : HttpClient
) { }




}
