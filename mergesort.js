function mergeSort(array, fn = (a,b) => a-b) { 
    array = split(array); 
    let arr1 = array[0] , arr2 = array[1];
    if (arr1.length > 1) arr1 = mergeSort(arr1, fn); 
    if (arr2.length > 1) arr2 = mergeSort(arr2, fn);
   
    return merge(arr1, arr2, fn);;  
}

function split(wholeArray) {
    let firstHalf = [], secondHalf = [];
    let i=0
    for(; i < Math.trunc(wholeArray.length / 2); i++)
        firstHalf.push(wholeArray[i]);
    for(; i < wholeArray.length; i++)   
    secondHalf.push(wholeArray[i]);
    
    return [firstHalf, secondHalf];
}

function merge(arr1, arr2, fn = (a,b) => a-b){
    let array = [];

    while(arr1.length > 0 || arr2.length > 0){
        if( arr2.length == 0 || arr1.length > 0 && fn(arr1[0], arr2[0]) < 0 )
            array.push(arr1.shift());
        else
            array.push(arr2.shift());
    }
    return array; 
}