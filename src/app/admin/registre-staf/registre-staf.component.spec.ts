import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreStafComponent } from './registre-staf.component';

describe('RegistreStafComponent', () => {
  let component: RegistreStafComponent;
  let fixture: ComponentFixture<RegistreStafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistreStafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreStafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
