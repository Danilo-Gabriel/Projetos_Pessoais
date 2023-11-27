import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss'],
  providers: [MessageService]
})
export class ErrorDialogComponent implements OnInit {


  constructor(private messageService: MessageService, @Inject(MAT_DIALOG_DATA) public erroLogin: string, @Inject(MAT_DIALOG_DATA) public login: string){}



  ngOnInit(): void {

  }

showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: this.login });
}

showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
}

showWarn() {
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
}

showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
}

}

