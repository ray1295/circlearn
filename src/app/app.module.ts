import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimerComponent } from './timer/timer.component';
import { BlogComponent } from './blog/blog.component';
import { TimetableComponent } from './timetable/timetable.component';
import { ProjectsComponent } from './projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { CalculatorComponent } from './calculator/calculator.component';



// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CalendarComponent,
    TimerComponent,
    BlogComponent,
    TimetableComponent,
    ProjectsComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
