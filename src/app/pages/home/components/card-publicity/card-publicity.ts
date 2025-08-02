import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-publicity',
  imports: [MatIconModule],
  templateUrl: './card-publicity.html',
  styleUrl: './card-publicity.scss',
})
export class CardPublicity {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() icon: string = '';
}
