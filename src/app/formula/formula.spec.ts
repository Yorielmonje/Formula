import { formula } from "./formula";

describe ('Calcular',() => {
    let form: formula;
    let long: number;
    beforeEach(()=>{
        form= new formula();
    });
    
    it('Si mando 0 me debe regresar -17.7778 C',() =>{  
        long=form.calcular(0);
        expect(long).toBe(form.lon);
    });
    it('si mando 32 me debe regresar 0C',() =>{  
        long=form.calcular(32);
        expect(long).toBe(0);
    });
    it('si mando 100 me debe regresar 37.7778',() =>{  
        long=form.calcular(100);
        expect(long).toBe(form.lon);
    });
    it('debe devolver el resultado',() =>{  
        long=form.calcular(36);
        expect(long).toBe(form.lon);
    });
});