import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './Book';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class BookService {

private readonly baseUrl = environment.endPoint;
private readonly Url = `${this.baseUrl}/books`;

  constructor(private http: HttpClient) { }

  createBook(book: Book, image: File): Observable<Book> {
    const formData: FormData = new FormData();
    formData.append('book', new Blob([JSON.stringify(book)], {
      type: 'application/json'
    }));
    formData.append('image', image);
    return this.http.post<Book>(this.Url, formData);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.Url);
  }
}