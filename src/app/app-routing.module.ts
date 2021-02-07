import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemindersComponent } from './reminders/reminders.component';


const routes: Routes = [
  { path: '', redirectTo: '/reminders', pathMatch: 'full' },
  { path: 'reminders', component: RemindersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
