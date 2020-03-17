import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { CoursesComponent } from './courses/courses.component';


const routes: Routes = [

{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path:'home',
      component: HomeComponent
    },
    {
      path:'courses',
      component: CoursesComponent
    }
  ]
},
{
  path: '**',
  component: Page404Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
