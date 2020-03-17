import { Component, OnInit } from '@angular/core';
type menuItem = {
  name :string,
  path :string
}

@Component({
  selector: 'cm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  menuItems: Array<menuItem> = [
    {
      name:'Home',
      path:'/home'
    },
    {
      name:'Courses',
      path:'/courses'
    },
    {
      name:'Students',
      path:'/students'
    },
    {
      name:'Teachers',
      path:'/teachers'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
