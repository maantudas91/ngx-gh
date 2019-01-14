import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';
import { User } from '../../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

	objectKeys = Object.keys;
	user: User;

  constructor(private route : ActivatedRoute, private userService: UserService,private location: Location) {
  	this.route.params.subscribe( params => {
  		this.getUserInfo(params['username']);
  	});
  }


  getUserInfo(username: String){
  		this.userService.getSingleUser(username).subscribe( response =>{
  			//console.log(response)
  			this.user = response;
  		});
  }


  goBack(): void{
  		this.location.back();
  }

}
