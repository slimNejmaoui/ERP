import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreParentComponent } from './registre-parent.component';

describe('RegistreParentComponent', () => {
  let component: RegistreParentComponent;
  let fixture: ComponentFixture<RegistreParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistreParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
