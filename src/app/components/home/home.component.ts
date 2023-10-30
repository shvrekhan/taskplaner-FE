import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    public apiService: ApiserviceService
  ) { }

  signUp() {
    this.apiService.signUp('shivarekhan@gmail.com', 'Shiva@18').subscribe((data) => {
      console.log(data);
    })
  }

}
