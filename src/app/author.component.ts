import {Component} from '@angular/core';
import {AuthorService} from './author.service';

@Component({
  selector: 'app-author',
  template: `<h2>Authors</h2>
  <p>Third component</p>
  <ul>
    <li *ngFor="let author of authors">
      {{ author }}
    </li>
  </ul>`,
  styleUrls: ['./app.component.css'],
  providers: [AuthorService]
})

export class AuthorComponent {
  authors;

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }
}
