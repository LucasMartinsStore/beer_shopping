import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPublicity } from './card-publicity';

describe('CardPublicity', () => {
  let component: CardPublicity;
  let fixture: ComponentFixture<CardPublicity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPublicity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPublicity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
