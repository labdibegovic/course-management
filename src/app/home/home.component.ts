import { Component, OnInit } from '@angular/core';
import { CourseService } from '../courses/core/course.service';

@Component({
  selector: 'cm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  courses;


  constructor(
    private courseService: CourseService // ako je public dostupna je home htmlu i onome ko koristi ovu komponentu
  ) {} //na ovaj nacin kroz konstruktor svako ko zeli da koristi ovaj servis pozivom ove komponente to i moze (DI)

  ngOnInit(): void {
  this.getCourses();
  }

  private getCourses(){
    this.courses=this.courseService.getAll();
  }

}
