import { Injectable } from '@angular/core';
// const CryptoJS = require("crypto-js");
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CookieService {

  constructor() { }

  setCookie(name: string, value: string) {
    const encryptedValue = CryptoJS.AES.encrypt(JSON.stringify(value), environment.SECRET_KEY).toString();
    document.cookie = `${name}=${encryptedValue}`;
  }
}
