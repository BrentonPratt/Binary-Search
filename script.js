let myArr = [];
let binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end){
        let mid = start + Math.floor((end - start) / 2);
        if(arr[mid] === target) {
            console.log(mid);
        }
        if(arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    console.log('Search Complete')
};

function linearSearch(array, toFind){
    for(let i = 0; i < array.length; i++){
        if(array[i] === toFind){
            console.log(i);
            return;
        } else {

        }
    }
}

function range(start, end) {
    for (let i = start; i <= end; i++) {
        myArr.push(i);
    }
}

range(1,10000000);

let newArr = [2,4,6,8,10,12,14,16,18,20];


let t0 = performance.now();
binarySearch(myArr, 9999999);
let t1 = performance.now();
console.log('binary search took '+ (t1 - t0) +' milliseconds');
let t2 = performance.now();
linearSearch(myArr, 9999999);
let t3 = performance.now();
console.log('linear search took '+ (t3 - t2) +' milliseconds');
