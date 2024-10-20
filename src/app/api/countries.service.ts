import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private backendUrl=environment.backendUrl;
  constructor(private http: HttpClient) { }

  getCountries() :Observable<any[]>{

    return this.http.get<any[]>(`${this.backendUrl}/countries`);
  }
}
