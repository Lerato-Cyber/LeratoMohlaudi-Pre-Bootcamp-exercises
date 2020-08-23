const array = [10, 58,87, 488];

function returnMax (arr) {
    let maxNumber;
    for(let i = 0; i < arr.length; i++){
        if(!maxNumber){ 
            maxNumber = arr[i]
        }
        if(arr[i] > maxNumber){
            maxNumber = arr[i];
        }
    }
    return maxNumber
}
console.log(returnMax(array));