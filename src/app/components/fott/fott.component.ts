import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fott',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fott.component.html',
  styleUrls: ['./fott.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FottComponent {

}
