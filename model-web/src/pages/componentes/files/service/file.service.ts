import { formatCurrency, formatDate } from '@angular/common';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

private apiUrl = environment.endPoint;

constructor(
  private http : HttpClient
) { }

uploadfile(file : File) : Observable<number | undefined | null> {
  const formData: FormData = new FormData();
  formData.append("file", file);
  return this.http.post(`${this.apiUrl}/api/file/upload`, formData, {
    observe:'events'
  }).pipe(
    map(event => this.getUploadProgress(event)),
  );
}

private getUploadProgress(event: any){
if(event.type === HttpEventType.UploadProgress){
  const percentDone = Math.round((event.loaded / event.total) * 100);
  return percentDone
}

return null;
}
getFiles(): Observable<any> {
  return this.http.get<File[]>(this.apiUrl + '/file/files');
}


downloadFile(fileId: number): Observable<HttpResponse<Blob>> {
  return this.http.get(this.apiUrl + `file/download/${fileId}`, {
    responseType: 'blob',
    observe: 'response',
  });
}

}
