import { Component, OnInit } from '@angular/core';
import { FileService } from '../service/file.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent  {

  selectedFile!: File | null | undefined;
  uploadProgress!: number | undefined | null;

  constructor(private fileUploadService: FileService) { }

  onFileSelected(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }

  uploadFile(): void {
    if (this.selectedFile) {
      this.fileUploadService.uploadfile(this.selectedFile)
        .subscribe(progress => {
          this.uploadProgress = progress;
          if (progress === 100) {
            alert("File upload completed")
            // File upload completed
            this.selectedFile = null;
          }
        });
    }
  }
}
