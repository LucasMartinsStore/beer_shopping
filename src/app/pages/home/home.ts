import { Component } from '@angular/core';
import { Banner } from './components/banner/banner';
import { CardPublicity } from './components/card-publicity/card-publicity';

@Component({
  selector: 'app-home',
  imports: [Banner, CardPublicity],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
