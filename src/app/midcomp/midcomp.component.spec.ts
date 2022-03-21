import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidcompComponent } from './midcomp.component';

describe('MidcompComponent', () => {
  let component: MidcompComponent;
  let fixture: ComponentFixture<MidcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
