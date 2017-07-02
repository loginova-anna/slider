import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMockComponent } from './card-mock.component';

describe('CardMockComponent', () => {
  let component: CardMockComponent;
  let fixture: ComponentFixture<CardMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
