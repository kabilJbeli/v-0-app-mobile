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

  uploadImage(payload:any,imageType:string):Observable<any>{
    return this.http.post<any>(`${this.backendUrl}/image-manager/upload/${imageType}`, payload);
  }

  createUser(user:any):Observable<any>{
    return this.http.post<any>(`${this.backendUrl}/api/user`, user);
  }

  signIn(user:any):Observable<any>{
    return this.http.post<any>(`${this.backendUrl}/user/login`, user);
  }

  patchUser(PasswordResetRequest:any):Observable<any>{
    return this.http.patch<any>(`${this.backendUrl}/api/user`, PasswordResetRequest);
  }
}
