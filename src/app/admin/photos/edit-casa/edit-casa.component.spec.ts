import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCasaComponent } from './edit-casa.component';

describe('EditCasaComponent', () => {
  let component: EditCasaComponent;
  let fixture: ComponentFixture<EditCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
