import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromPizzaCreateComponent } from './form-pizza-create.component';

describe('FromPizzaCreateComponent', () => {
  let component: FromPizzaCreateComponent;
  let fixture: ComponentFixture<FromPizzaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FromPizzaCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromPizzaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
