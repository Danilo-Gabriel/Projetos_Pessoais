import { Component, OnInit } from '@angular/core';
import { Product } from './dto/product';
import { ListContaService } from './service/list-conta.service';
import { AppMessageService } from 'src/shared/components/app-message/app-message.service';

@Component({
  selector: 'app-list-conta',
  templateUrl: './list-conta.component.html',
  styleUrls: ['./list-conta.component.scss']
})
export class ListContaComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
