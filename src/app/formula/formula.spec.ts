import { formula } from "./formula";

describe ('Calcular',() => {
    let form: formula;
    let long: number;
    beforeEach(()=>{
        form= new formula();
    });
    
    it('Si la Frecuencia de la onda es 0, el resultado de longitud de onda debe ser 0',() =>{  
        long=form.calcular(10,0);
        expect(long).toBe(0);
    });
    it('Si la velocidad es -20 y la frecuencia de la onda es 4, la longitud de la onda debe ser -5',() =>{  
        long=form.calcular(-20,4);
        expect(long).toBe(-5);
    });
    it('Si la velocidad es 60 y la frecuencia es -3, la longitud de la onda debe ser -20',() =>{  
        long=form.calcular(60,-3);
        expect(long).toBe(-20);
    });
    it('Si la Velocidad es 10 y la frecuencia de la onda 5, la longitud de la onda debe ser 2',() =>{  
        long=form.calcular(10,5);
        expect(long).toBe(2);
    });
});