import { Injectable } from '@angular/core';
import { componentItem } from '../common/componentItem';
import { SingleBookComponent } from '../single-book/single-book.component';


@Injectable({
  providedIn: 'root'
})
export class FetchBookService {

  constructor() { }
  getBooks() {
    return [
      new componentItem(SingleBookComponent, {name: 'singleBook', bio: 'Brave as they come'})
    ];
  }
}
