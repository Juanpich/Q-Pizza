import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QPizzaPizzasComponent } from './q-pizza-pizzas.component';

describe('QPizzaPizzasComponent', () => {
  let component: QPizzaPizzasComponent;
  let fixture: ComponentFixture<QPizzaPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QPizzaPizzasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QPizzaPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
