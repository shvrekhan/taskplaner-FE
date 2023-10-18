import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { FottComponent } from './components/fott/fott.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [LoginComponent, NavComponent, FottComponent, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'taskplaner-FE';
}
