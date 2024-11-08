import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private backendUrl=environment.backendUrl;

  constructor(private http: HttpClient) { }

  createUser(user:any):Observable<any>{
    return this.http.post<any>(`${this.backendUrl}/api/user`, user);
  }

  signIn(user:any):Observable<any>{
    return this.http.post<any>(`${this.backendUrl}/user/login`, user);
  }

}
