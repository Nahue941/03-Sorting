
  
describe('Split Array function', function() {
    it('es capar de dividir el arreglo par en dos partes del mismo tamaño', function() {
        expect(split([1,2,3,6,4,5])).toEqual([[1,2,3],[6,4,5]]);
    });
    it('es capar de dividir el arreglo impar en dos partes de tamaño distinto', function() {
        expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
    });
    
    

});

describe('Merge', function(){
    it('es capaz de mergear dos arreglos ordenados a un solo arreglo ordenado', function(){
        expect(merge([1,3,5],[4,6,7])).toEqual([1,3,4,5,6,7]);
    });
});

describe('MergeSort', function(){
    it('es capaz de ordenar arreglos', function(){
        expect(mergeSort([6,9,5,4,1,7])).toEqual([1,4,5,6,7,9]);
    });
    it('es capaz de ordenar arreglos con numeros repetidos', function(){
        expect(mergeSort([1,2,7,6,9,5,4,1,7])).toEqual([1,1,2,4,5,6,7,7,9]);
    });
    it('es capaz de ordenar arreglos con solo 2 elementos', function(){
        expect(mergeSort([2,1])).toEqual([1,2]);
    });
    it(`llama a la funcion 'mergerSort' de manera recursiva`, function(){
        spyOn(window, 'mergeSort').and.callThrough(); 
        mergeSort([6,9,5,4,1,7]); 
        expect(mergeSort.calls.count()).toEqual(5);
    });
    it(`llama a la funcion 'split' varias veces`, function(){
        spyOn(window, 'split').and.callThrough(); 
        mergeSort([6,9,5,4,1,7]); 
        expect(split.calls.count()).toEqual(5);
    });
    it(`llama a la funcion 'merge' varias veces`, function(){
        spyOn(window, 'merge').and.callThrough(); 
        mergeSort([6,9,5,4,1,7]); 
        expect(merge.calls.count()).toEqual(5);
    });
    it('es capaz de ordenar objetos pasandole una funcion comparadora', function(){
        var arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
        var fnComparator = (a, b) => a.age - b.age;
        expect(mergeSort(arrToSort,fnComparator)).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
    });
});