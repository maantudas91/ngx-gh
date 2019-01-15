import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { UserModule } from '../user';
import { CommonModule } from '@angular/common';
import { ShortlistedUsersModule } from '../shortlisted-users';
import { PipeModule } from '../../pipes';

const routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    UserModule,
    ShortlistedUsersModule,
    PipeModule
  ],
  providers: []
})
export class HomeModule { }
