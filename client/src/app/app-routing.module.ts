import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'reader',
    loadChildren: () => import('./reader/reader.module').then(m => m.ReaderModule)
  },
  {
    path: 'vocabulary',
    loadChildren: () => import('./vocabulary/vocabulary.module').then(m => m.VocabularyModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
