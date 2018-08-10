import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
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
import { GradeComponent } from './grade/grade.component';
import { DataService } from './data.service';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';


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
    CalculatorComponent,
    GradeComponent,
    ProfileComponent,
    HomeComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
