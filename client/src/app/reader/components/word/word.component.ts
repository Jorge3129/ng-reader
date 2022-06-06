import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-word',
  template: `
    <span *ngIf="word" class="word_container">
      <span class="word">
        {{ word | removeSpace}}
      </span>
      <span (click)="$event.stopImmediatePropagation()">&nbsp;</span>
    </span>
  `,
  styleUrls: ['word.component.css']
})
export class WordComponent implements OnInit {

  @Input() word!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
