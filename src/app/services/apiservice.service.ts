import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { userData } from './interface';

@Injectable({
  providedIn: 'root'
})


export class ApiserviceService {

  constructor(
    private http: HttpClient
  ) { }

  signUp(userSignUpData: userData) {
    return this.http.post(`${environment.apiBaseUrl}/auth/signUp`, userSignUpData);
  }

  login(userLoginData: userData) {
    return this.http.post(`${environment.apiBaseUrl}/auth/login`, userLoginData);
  }

  isTokenValid() {
    return this.http.get(`${environment.apiBaseUrl}/auth/isTokenValid`);
  }

  getAllCards() {
    return this.http.get(`${environment.apiBaseUrl}/board/getBoards`);
  }

  addBoard() {
    return this.http.post(`${environment.apiBaseUrl}/board/addBoard`, { name: 'personal Board' })
  }

  removeBoard(id: string) {
    return this.http.delete(`${environment.apiBaseUrl}/board/deleteBoard/${id}`);
  }

}
