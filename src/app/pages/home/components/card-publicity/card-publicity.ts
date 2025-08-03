import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-publicity',
  imports: [MatIconModule, CommonModule],
  templateUrl: './card-publicity.html',
  styleUrl: './card-publicity.scss',
})
export class CardPublicity {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() icon: string = '';

  @ViewChild('cardElement', { static: false })
  cardElement!: ElementRef<HTMLElement>;
  @ViewChild('contentArea', { static: false })
  contentArea!: ElementRef<HTMLElement>;

  isExpanded: boolean = false;

  private _renderer = inject(Renderer2);

  toggleCard(): void {
    if (!this.cardElement) {
      return;
    }

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      return;
    }

    const cardEl = this.cardElement.nativeElement;

    this.isExpanded = !this.isExpanded;

    if (this.isExpanded) {
      this._renderer.addClass(cardEl, 'expanding');

      setTimeout(() => {
        this._renderer.removeClass(cardEl, 'expanding');
      }, 300);
    } else {
      this._renderer.addClass(cardEl, 'collapsing');

      setTimeout(() => {
        this._renderer.removeClass(cardEl, 'collapsing');
      }, 300);
    }
  }

  isMobileView(): boolean {
    return window.innerWidth <= 768;
  }
}
