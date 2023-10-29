import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private http: HttpClient
  ) { }

  signUp(userName: string, password: string) {
    return this.http.post(`${environment.apiBaseUrl}/auth/signUp`, { email: userName, password: password })
  }

}
