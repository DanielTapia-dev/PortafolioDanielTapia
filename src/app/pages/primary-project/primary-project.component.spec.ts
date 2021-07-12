import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryProjectComponent } from './primary-project.component';

describe('PrimaryProjectComponent', () => {
  let component: PrimaryProjectComponent;
  let fixture: ComponentFixture<PrimaryProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
