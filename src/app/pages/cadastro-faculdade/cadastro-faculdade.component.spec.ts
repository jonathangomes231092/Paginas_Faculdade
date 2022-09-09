import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFaculdadeComponent } from './cadastro-faculdade.component';

describe('CadastroFaculdadeComponent', () => {
  let component: CadastroFaculdadeComponent;
  let fixture: ComponentFixture<CadastroFaculdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroFaculdadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroFaculdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
