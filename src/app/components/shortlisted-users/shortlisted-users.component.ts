import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { SharedService } from '../../services/shared.service';
import { Subscription, Observable } from 'rxjs';
@Component({
  selector: 'app-shortlisted-users',
  templateUrl: './shortlisted-users.component.html',
  styleUrls: ['./shortlisted-users.component.scss']
})
export class ShortlistedUsersComponent implements OnInit {

  users: Array<User> = [];
  
  private subscription: Subscription;

  users$ : Observable<any>;

  constructor(private sharedService : SharedService) { }

  ngOnInit() {
    this.users$ = this.sharedService.$userData;
  }


  remove(user : User){
      this.sharedService.removeFromUsers(user);
  }


}
