import { Injectable } from '@angular/core';
// const CryptoJS = require("crypto-js");
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CookieService {

  constructor() { }

  parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  setCookie(name: string, value: string) {
    // console.log(this.parseJwt(value), "opopop")
    const encryptedValue = CryptoJS.AES.encrypt(JSON.stringify(value), environment.SECRET_KEY).toString();
    document.cookie = `${name}=${encryptedValue}`;
  }

  getCookie(name: string) {
    const cookieValue = document.cookie.split(';').find((cookie) => {
      return cookie.trim().startsWith(name + '=')
    })
    if (cookieValue) {
      return cookieValue.split("=")[1];
    }
    else return '';
  }
}
