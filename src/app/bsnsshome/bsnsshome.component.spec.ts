import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsnsshomeComponent } from './bsnsshome.component';

describe('BsnsshomeComponent', () => {
  let component: BsnsshomeComponent;
  let fixture: ComponentFixture<BsnsshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsnsshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsnsshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
