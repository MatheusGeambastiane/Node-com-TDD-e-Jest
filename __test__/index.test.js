const app = require('../index');


describe('Calculadora', () => {

    it ('Soma ', () => {
        expect(app.soma(2,3)).toBe(5);
        expect(app.soma(3,3)).toBe(6);
        expect(app.soma(5,3)).toBe(8);
        })
    
    it ('Multiplicacao ', () => {
        expect(app.multiplica(2,3)).toBe(6);
        expect(app.multiplica(3,3)).toBe(9);
       
        })
    
    it ('Divisão ', () => {
        expect(app.divisao(10,2)).toBe(5);
       
        })
})



