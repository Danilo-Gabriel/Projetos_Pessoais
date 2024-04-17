import { Component, OnInit } from '@angular/core';
import { Book } from '../book/Book';
import { BookService } from '../book/BookService';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}
    ngOnInit(): void {
      this.bookService.getBooks().subscribe({
        next: (data) => {
          this.books = data;
        },
        error: (err) => {
          console.error('Error fetching books', err);
        }
      });
    }
}