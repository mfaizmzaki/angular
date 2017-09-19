import { Component } from '@angular/core';



@Component({
  selector: 'app-root', // Will be select the <app-root> tag dlm index.html. can be any other name
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// A typical typescript class
export class AppComponent {
  title = 'Faiz\'s First Angular 2 App'; // Title that will be fed to html template
}
