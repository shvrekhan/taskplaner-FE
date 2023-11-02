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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTabsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  signUpForm!: FormGroup;
  constructor(
    public apiService: ApiserviceService,
    private fb: FormBuilder,
    private cookieService: CookieService
  ) {
    this.signUpForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  signUp() {
    const signUpValues = this.signUpForm.getRawValue()
    this.apiService.signUp(signUpValues).subscribe((data) => {
      console.log(data);

    })
  }

  login() {

  }

}
