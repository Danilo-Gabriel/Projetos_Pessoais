import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from './BookService';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  bookForm: FormGroup;

  selectedImage: File | undefined;

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    });
  }

  onImageSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.selectedImage = fileList[0];
    }
  }

  onSubmit(): void {
    if (this.bookForm.valid && this.selectedImage) {
      this.bookService.createBook(this.bookForm.value, this.selectedImage).subscribe({
        next: (book) => {
          // Handle the response
        },
        error: (err) => {
          // Handle errors
        }
      });
    }
  }
}