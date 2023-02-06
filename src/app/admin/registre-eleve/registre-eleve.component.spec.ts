import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreEleveComponent } from './registre-eleve.component';

describe('RegistreEleveComponent', () => {
  let component: RegistreEleveComponent;
  let fixture: ComponentFixture<RegistreEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistreEleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
