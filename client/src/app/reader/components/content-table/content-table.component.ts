import {Component, Input, OnInit} from '@angular/core';
import {ContentTableSection, DeepBook} from "../../../models/books";
import {formatStructure} from "../../../models/book.utils";

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent implements OnInit {
  @Input() book?: DeepBook
  structure: ContentTableSection[]

  constructor() {
    this.structure = this.book ? formatStructure(this.book.content) : []
  }

  ngOnInit(): void {
  }

}
