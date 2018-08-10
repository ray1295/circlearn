import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimerComponent } from './timer/timer.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { GradeComponent } from './grade/grade.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'grade', component: GradeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [HomeComponent, ProfileComponent, LoginFormComponent, RegisterFormComponent,
  CalendarComponent,
  TimerComponent,
  BlogComponent,
  TimetableComponent,
  ProjectsComponent,
  CalculatorComponent,
  GradeComponent];
