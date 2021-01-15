function bubbleSort(array) {
    for(let i=0;i<array.length;i++)
        for (let j=0;j<array.length-1-i;j++)
            if(array[j]>array[j+1])
               array = swap(j,j+1,array);

    return array;
}

function swap(a,b,array){
    let aux = array[a]
    array[a]=array[b];
    array[b]=aux;
    return array;
}