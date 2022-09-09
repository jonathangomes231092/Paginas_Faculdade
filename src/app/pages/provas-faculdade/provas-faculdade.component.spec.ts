import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvasFaculdadeComponent } from './provas-faculdade.component';

describe('ProvasFaculdadeComponent', () => {
  let component: ProvasFaculdadeComponent;
  let fixture: ComponentFixture<ProvasFaculdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvasFaculdadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvasFaculdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
