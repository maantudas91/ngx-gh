import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'', loadChildren: './components/home/index#HomeModule' },
  { path:'home', redirectTo:'', pathMatch: 'full'},
  { path:'user/:username', loadChildren : './components/user-details/index#UserDetailsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
