import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCasaComponent } from './print-casa.component';

describe('PrintCasaComponent', () => {
  let component: PrintCasaComponent;
  let fixture: ComponentFixture<PrintCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
