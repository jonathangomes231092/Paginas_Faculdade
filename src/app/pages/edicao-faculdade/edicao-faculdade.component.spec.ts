import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoFaculdadeComponent } from './edicao-faculdade.component';

describe('EdicaoFaculdadeComponent', () => {
  let component: EdicaoFaculdadeComponent;
  let fixture: ComponentFixture<EdicaoFaculdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoFaculdadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoFaculdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
