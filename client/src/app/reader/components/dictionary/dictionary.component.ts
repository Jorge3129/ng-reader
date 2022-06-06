import {Component, Input, OnInit} from '@angular/core';
import {DictEntry} from "../../../models/words";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  @Input() entries?: DictEntry[]
  @Input() loading?: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
