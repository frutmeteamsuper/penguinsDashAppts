import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeznavComponent } from './deznav.component';

describe('DeznavComponent', () => {
  let component: DeznavComponent;
  let fixture: ComponentFixture<DeznavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeznavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeznavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
