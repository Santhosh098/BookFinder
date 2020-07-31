import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {
  @Input() ComponentData:any;
  constructor() { }

  ngOnInit() {
  }

}
