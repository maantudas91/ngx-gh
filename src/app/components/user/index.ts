import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserComponent],
  exports:[UserComponent],
  imports:[RouterModule,CommonModule],
  providers: []
})
export class UserModule { }
