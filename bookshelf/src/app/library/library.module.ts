import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { BookResultsComponent } from './book-results/book-results.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LibraryComponent,
    BookSearchComponent,
    BookResultsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{path: "", component: LibraryComponent }]),
  ]
})
export class LibraryModule { }
