import {Injectable} from '@angular/core';

const COURSES = [
    {
      name:'Test course 1',
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
  
    {
      name:'Test course 2',
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    
    {
        name:'Test course 3',
        description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      
    {
        name:'Test course 4',
        description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      }
  ]

@Injectable(
    {providedIn: 'root'} //svaki modul moze da ga koristi
)
export class CourseService {
    //nema lifeclye kao komponenta

    getAll(){
        return COURSES;
    }



    

}