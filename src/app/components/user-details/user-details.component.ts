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
	user: User;

	userDataArray :Array<any>= [];

  constructor(private route : ActivatedRoute, private userService: UserService,private location: Location) {
  	this.route.params.subscribe( params => {
  		this.getUserInfo(params['username']);
  	});
	}
	
	get userData(){
		return this.userDataArray;
	}

	set userData(user:any){
			Object.entries(user).forEach(([key, value], index) => {
				this.userDataArray[index] = { 'key' : key, 'value': value}
			});
	}


  getUserInfo(username: String){
  		this.userService.getSingleUser(username).subscribe( response =>{
  			//console.log(response)
				this.user = response;
				this.userData = response
  		});
  }


  goBack(): void{
  		this.location.back();
  }

}
