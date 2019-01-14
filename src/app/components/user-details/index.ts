import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './user-details.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../../pipes';

const routes = [
    { path: '', component: UserDetailsComponent }
];

@NgModule({
  declarations: [
      UserDetailsComponent
  ],
  imports: [
      RouterModule.forChild(routes), 
      CommonModule,
      PipeModule
  ],
  providers: []
})
export class UserDetailsModule { }
