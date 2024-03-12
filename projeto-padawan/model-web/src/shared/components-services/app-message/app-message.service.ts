import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AppMessageService {


constructor(
  private messageService : MessageService
) { }

showSuccess(mgs : string) {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: mgs });
}

showInfo(mgs : string) {
  this.messageService.add({ severity: 'info', summary: 'Info', detail: mgs });
}

showWarn(mgs : string) {
  this.messageService.add({ severity: 'warn', summary: 'Warn', detail: mgs });
}

showError(mgs : string) {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: mgs });
}



}
