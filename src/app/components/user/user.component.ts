import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input('user') user : User;

  constructor( private router : Router) { }

  ngOnInit() {
  }

  goToUserDetails(user: User){
  	this.router.navigate(['/user', user.login])
  }
}
