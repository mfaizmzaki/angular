import {Component} from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-courses',
  template: `<h2>Courses</h2>
  <input type="text" autoGrow />
  <p>Second component</p>
  <ul>
    <li *ngFor="let course of courses">
      {{ course }}
    </li>
  </ul>`,
  styleUrls: ['./app.component.css'],
  providers: [CourseService]
})

export class CoursesComponent {
  courses;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}
