import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inat-usuario',
  templateUrl: './inat-usuario.component.html',
  styleUrls: ['./inat-usuario.component.css']
})
export class InatUsuarioComponent  {

  
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
