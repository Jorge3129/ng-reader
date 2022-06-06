import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReaderComponent} from "./components/reader/reader.component";
import {TextComponent} from "./components/text/text.component";
import {ContentTableComponent} from "./components/content-table/content-table.component";
import {RemoveSpacePipe} from "./pipes/removeSpace.pipe";
import {ReaderRoutingModule} from "./reader-routing.module";
import { WordComponent } from './components/word/word.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';



@NgModule({
  declarations: [
    ReaderComponent,
    TextComponent,
    ContentTableComponent,
    RemoveSpacePipe,
    WordComponent,
    DictionaryComponent
  ],
  imports: [
    CommonModule,
    ReaderRoutingModule
  ]
})
export class ReaderModule { }
