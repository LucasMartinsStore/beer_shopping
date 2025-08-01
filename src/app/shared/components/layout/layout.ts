import { Component } from '@angular/core';
import { Toolbar } from '../toolbar/toolbar';

@Component({
  selector: 'app-layout',
  imports: [Toolbar],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
