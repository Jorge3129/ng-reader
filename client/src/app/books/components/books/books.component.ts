import { Component, OnInit } from '@angular/core';
import {BooksService} from "../../services/books.service";
import {BookDescription} from "../../../models/books";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: BookDescription[]

  constructor(private booksService: BooksService) {
    this.books = []
  }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks() {
    this.booksService.getBooks()
      .subscribe(books => this.books = books)
  }

}
