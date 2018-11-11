import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgtoComponent } from './pgto.component';

describe('PgtoComponent', () => {
  let component: PgtoComponent;
  let fixture: ComponentFixture<PgtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
