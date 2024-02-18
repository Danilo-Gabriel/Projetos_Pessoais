import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private baseUrl = 'http://localhost:8080/api/files';

  fileList!: any[];
  selectedFileContent!: Blob;
  selectedFile: File | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listFiles().subscribe(
      (files: any[]) => {
        this.fileList = files;
      },
      (error) => {
        console.error('Erro ao recuperar a lista de arquivos:', error);
      }
    );
  }

  onSelectFile(fileName: string): void {
    this.getFileContent(fileName).subscribe(
      (content: Blob) => {
        this.selectedFileContent = content;
      },
      (error) => {
        console.error('Erro ao recuperar o conteúdo do arquivo:', error);
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (!this.selectedFile) {
      alert('Por favor, selecione um arquivo.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post<any>(`${this.baseUrl}/upload`, formData).subscribe(
      (response) => {
        console.log('Arquivo enviado com sucesso para o backend:', response);
        alert('Arquivo enviado com sucesso.');
      },
      (error) => {
        console.error('Erro ao enviar arquivo para o backend:', error);
        alert('Erro ao enviar arquivo. Verifique o console para mais detalhes.');
      }
    );
  }
  listFiles(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/img`); // Retornar uma lista de nomes de arquivos
  }

  getFileContent(fileName: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${fileName}`, { responseType: 'blob' });
  }

  getBlobUrl(blob: Blob): string {
    return URL.createObjectURL(blob);
  }
}
