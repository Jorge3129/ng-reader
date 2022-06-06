import {Component, OnInit} from '@angular/core';
import {DeepBook} from '../../../models/books'
import {BookService} from "../../services/book.service";
import {DictionaryService} from "../../services/dictionary.service";
import {DictEntry} from "../../../models/words";

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  book?: DeepBook
  dictEntries?: DictEntry[]
  loadingWord: boolean = false

  constructor(private booksService: BookService, private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.getBook()
  }

  getBook(): void {
    this.booksService.getBook()
      .subscribe(book => this.book = book);
  }

  searchWord(word: string) {
    this.loadingWord = true
    this.dictionaryService.searchWord(word)
      .subscribe(entries => {
        this.dictEntries = entries
        this.loadingWord = false;
        console.log(this.loadingWord, this.dictEntries)
      })
  }
}
