import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FottComponent } from './fott.component';

describe('FottComponent', () => {
  let component: FottComponent;
  let fixture: ComponentFixture<FottComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FottComponent]
    });
    fixture = TestBed.createComponent(FottComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
