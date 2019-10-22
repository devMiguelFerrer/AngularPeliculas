import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularesComponent } from './populares.component';

describe('PopularesComponent', () => {
  let component: PopularesComponent;
  let fixture: ComponentFixture<PopularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
