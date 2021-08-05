import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { Home1Component } from './components/home1/home1.component';
import { RetailcourseComponent } from './components/retailcourse/retailcourse.component';
import { InstitutionalcourseComponent } from './components/institutionalcourse/institutionalcourse.component';
import { CooperatecourseComponent } from './components/cooperatecourse/cooperatecourse.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';

const routes: Routes = [
  {
    path: '',
    component: Home1Component
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'events',
    component: EventsComponent
    
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'retailcourse',
    component:RetailcourseComponent
  },
  {
    path:'cooperatecourse',
    component:CooperatecourseComponent
  },
  {
    path:'institutionalcourse',
    component:InstitutionalcourseComponent
  },
  {
    path:'details',
    component:CoursedetailsComponent
  },
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
