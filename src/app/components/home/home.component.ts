import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users : Array<User> = [];
  @ViewChild('searchText') searchText;
  search : String = '';

  constructor(private userService : UserService, private sharedService : SharedService) { }

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
    this.search='';
    this.searchText.nativeElement.value = '';
  }

  onKeydown(event, vc) {
    if (event.key === "Enter") {
      this.search = vc.value;
    }
  }


  shortList(user: User){
      this.sharedService.addToUsers(user);
  }

}
