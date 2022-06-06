import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {SplitTextSection} from "../../../models/books";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit, OnChanges {

  section?: SplitTextSection
  @Output() wordSearch = new EventEmitter<string>()

  constructor(private booksService: BookService) { }

  ngOnInit(): void {
    this.getSection()
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.section)
  }

  getSection(): void {
    this.booksService.getSection(0)
      .subscribe(section => {
        console.log(section)
        this.section = section
      });
  }

  handleWordSearch(word: string) {
    this.wordSearch.emit(word)
  }
}
