

const coolArray = [1, 2, "string", false, ];

console.log(coolArray);

//challenge 1

const arr1 = (arr, num) => arr[num];

console.log(arr1(["Mike", "Amy", "Apple", "Orange"], 2));

const arr2 = (arr) => arr.indexOf('Luna') === -1? false : true;
/*
{
    if (arr.indexOf('Luna') === -1) {
        return false;
    }
    return true;
}
*/

console.log(arr2(["mmm", "kkk", "iii", "Luna", "eee"]));



//challenge 2