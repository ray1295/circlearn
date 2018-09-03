import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimerComponent } from './timer/timer.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { GradeComponent } from './grade/grade.component';
import { SettingComponent } from './setting/setting.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'grade', component: GradeComponent },
  { path: 'settings', component: SettingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = 
[ HomeComponent, 
  ProfileComponent, 
  LoginFormComponent, 
  RegisterComponent,
  CalendarComponent,
  TimerComponent,
  BlogComponent,
  TimetableComponent,
  ProjectsComponent,
  CalculatorComponent,
  GradeComponent,
  SidenavigationComponent,
  SettingComponent];
