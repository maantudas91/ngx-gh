import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userDataSource = new BehaviorSubject<User[]>([]);
  $userData  = this.userDataSource.asObservable();

  constructor() { }

  addToUsers(user:User) {
    let currentValue = this.userDataSource.value;
    let result = currentValue.filter(u => u.id == user.id);
    if( result.length > 0){
      alert('User already shortlisted');
    }else{
      let updatedValue = [...currentValue, user];
      this.userDataSource.next(updatedValue);
    }
    
  }


  removeFromUsers(user: User) :void{
    let currentValue: User[] = this.userDataSource.getValue();
    currentValue.forEach((u, index) => {
        if(u === user) { currentValue.splice(index, 1); }
    });
    this.userDataSource.next(currentValue);
  }
  
}
