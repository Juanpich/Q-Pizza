import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QPizzaAboutComponent } from './q-pizza-about.component';

describe('QPizzaAboutComponent', () => {
  let component: QPizzaAboutComponent;
  let fixture: ComponentFixture<QPizzaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QPizzaAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QPizzaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
