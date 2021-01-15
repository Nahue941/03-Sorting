describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect(bubbleSort([])).toEqual([]);
        
    });
    
    it('hace un solo cambio para ordenar el array', function () {
        spyOn(window, 'swap').and.callThrough(); 
        bubbleSort([1,2,4,3,5]);
        expect(swap.calls.count()).toEqual(1);
      });
    it('hace varios cambios para un array desordenado', function () {
        spyOn(window, 'swap').and.callThrough(); 
        bubbleSort([5,2,4,3,1]);
        expect(swap.calls.count()).toEqual(8);
      });
    it('para un array ordenado no deberia hacer cambios ', function () {
        spyOn(window, 'swap').and.callThrough(); 
        bubbleSort([1,2,3,4,5]);
        expect(swap.calls.count()).toEqual(0);
      });
});