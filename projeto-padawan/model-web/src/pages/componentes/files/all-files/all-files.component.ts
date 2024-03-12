import { Component, OnInit } from '@angular/core';
import { FileService } from '../service/file.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.css']
})
export class AllFilesComponent  {

  files: any = [];

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.fileService.getFiles().subscribe(
      (response: any[]) => {
        response.forEach(element => {
          element.processedImg = 'data:image/jpeg;base64,' + element.data;
          this.files.push(element);
        });
      },
      error => {
        console.error('Error fetching files:', error);
      }
    );
  }

  downloadFile(idDoArquivo: number): void {
    this.fileService.downloadFile(idDoArquivo).subscribe((resposta : HttpResponse<Blob>) => {
      const headerDeDisposicaoDeConteúdo = resposta.headers.get("Content-Disposition");
      let nomeDoArquivo = "arquivo"; // Nome padrão do arquivo caso não seja possível extrair dos cabeçalhos ou URL

      if (headerDeDisposicaoDeConteúdo) {
        const regexDeNomeDoArquivo = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const correspondencias = regexDeNomeDoArquivo.exec(headerDeDisposicaoDeConteúdo);
        if (correspondencias != null && correspondencias[1]) {
          nomeDoArquivo = correspondencias[1].replace(/['"]/g, '');
        }
      } else {
        console.log("Cabeçalho Content-Disposition não encontrado, tentando extrair nome do arquivo da URL.");
        // Implementar lógica para extrair o nome do arquivo da URL, se necessário
      }

      const tipoDeConteúdo = resposta.headers.get("Content-Type");
      const corpoDaResposta = resposta.body;

      if (corpoDaResposta instanceof Blob) {
        const blob = corpoDaResposta;

        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = nomeDoArquivo;

        link.click();

        window.URL.revokeObjectURL(link.href);
        link.remove();
      } else {
        console.log("O corpo da resposta não é um Blob válido");
      }
    });
  }

}
