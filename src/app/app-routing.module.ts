import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { HabitsComponent } from './habits/habits.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
// Localhost:4200
  {path: '', component: SignupComponent, pathMatch: 'full'},
  { path: 'tasks', component: TasksComponent},
  { path: 'habits', component: HabitsComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
