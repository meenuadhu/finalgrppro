import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamComponent } from './components/team/team.component';
import { Home1Component } from './components/home1/home1.component';
import { RetailcourseComponent } from './components/retailcourse/retailcourse.component';
import { CooperatecourseComponent } from './components/cooperatecourse/cooperatecourse.component';
import { InstitutionalcourseComponent } from './components/institutionalcourse/institutionalcourse.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    FooterComponent,
    TeamComponent,
    Home1Component,
    RetailcourseComponent,
    CooperatecourseComponent,
    InstitutionalcourseComponent,
    CoursedetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
