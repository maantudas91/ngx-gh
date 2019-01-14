import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortlistedUsersComponent } from './shortlisted-users.component';
import { UserModule } from '../user';

@NgModule({
  declarations: [
    ShortlistedUsersComponent
  ],
  exports:[ShortlistedUsersComponent],
  imports: [
    CommonModule,
    UserModule
  ]
})
export class ShortlistedUsersModule { }
