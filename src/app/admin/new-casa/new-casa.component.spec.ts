import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCasaComponent } from './new-casa.component';

describe('NewCasaComponent', () => {
  let component: NewCasaComponent;
  let fixture: ComponentFixture<NewCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
