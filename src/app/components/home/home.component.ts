import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users : Array<User> = [];

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( response =>{
      console.log(response);
        this.users = response;
    });
  }


  cancel(user:User, index){
    console.log(user);
    //this.users.filter( u => u.id != user.id);
    this.users.splice(index,1);
  }

}
