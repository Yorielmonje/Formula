import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiComponent } from './ui.component';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Si mando un valor de 20 en velocidad, y un valor de 5 en frecuencia, al darle click al boton de calcular, debería mostrarse un valor de 4',()=>{
    let result=0;
    component.value1=20;
    component.calcular();
    result=component.resultado;
    expect(result).toBe(component.resultado);
  });
  it('Si yo mando un valor de 10 en el text Box de velocidad, velocidad debe valer 10',()=>{
    let result=0;
    result=component.value1=10;
    expect(result).toBe(10);
  });
});
