import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
@Component({
  selector: 'app-shortlisted-users',
  templateUrl: './shortlisted-users.component.html',
  styleUrls: ['./shortlisted-users.component.scss']
})
export class ShortlistedUsersComponent implements OnInit {

	users: Array<User> = [];

  constructor() { }

  ngOnInit() {
  }

}
