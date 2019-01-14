import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(): Observable<any>{
      return this.http.get(`${environment.API_URL}/users`);
  }


  getSingleUser(login: String): Observable<any>{
  	return this.http.get(`${environment.API_URL}/users/${login}`);
  }
}
