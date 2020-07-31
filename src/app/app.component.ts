import { Component } from '@angular/core';
import { ConfigUrls } from './common/app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ConfigUrls]
})
export class AppComponent {
  title = 'BookFinder';
}
