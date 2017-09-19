import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoursesComponent } from './courses.component';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author.component';
import { AutoGrowDirective } from './autogrow.directive';


@NgModule({
  declarations: [
    AppComponent, CoursesComponent, AuthorComponent, AutoGrowDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
