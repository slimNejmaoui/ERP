import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreEnseignantComponent } from './registre-enseignant.component';

describe('RegistreEnseignantComponent', () => {
  let component: RegistreEnseignantComponent;
  let fixture: ComponentFixture<RegistreEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistreEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
