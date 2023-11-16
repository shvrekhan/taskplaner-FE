import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { CookieService } from 'src/app/services/cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTabsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  signUpForm!: FormGroup;
  loginForm!: FormGroup;

  constructor(
    public apiService: ApiserviceService,
    private fb: FormBuilder,
    private cookieService: CookieService,
    private router: Router
  ) {

    this.signUpForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });

    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }

  signUp() {
    const signUpValues = this.signUpForm.getRawValue()
    this.apiService.signUp(signUpValues).subscribe((authInfo: any) => {
      this.router.navigate(['/board'])
    })
  }

  login() {
    const loginValues = this.loginForm.getRawValue();
    this.apiService.login(loginValues).subscribe(() => {
      this.router.navigate(['/board'])
    })
  }

}
