import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFaculdadeComponent } from './consulta-faculdade.component';

describe('ConsultaFaculdadeComponent', () => {
  let component: ConsultaFaculdadeComponent;
  let fixture: ComponentFixture<ConsultaFaculdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaFaculdadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaFaculdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
