// Add your functions here
// function map(sourceArray){
//     return sourceArray.map(x => x * -1);
// }
// map();
//
// function map(sourceArray){
//     return sourceArray.map(x => x);
// }
//
// function map(sourceArray){
//     return sourceArray.map(x => x*2);
// }
//
// function map(sourceArray){
//     return sourceArray.map(x => x*x)
// }

function map(sourceArray) {
return sourceArray.map(x => x * -1);
}

let two = function(sourceArray) {

  function map(sourceArray){
      return sourceArray.map(x => x)
}
let three= function(sourceArray) {
function map(sourceArray){
    return sourceArray.map(x => x*2)
}

functionUsingCallback(map, two, three , function(sourceArray){
  return sourceArray.map(x => x*x)
});

function functionUsingCallback(eins, zwei, drei, sourceArray){
  eins()
  zwei()
  drei()
}

























// function reduce(sourceArray, startingPoint = 0){
//     const reducer = function(accumulator, currentValue){ return accumulator + currentValue }
//
//     return sourceArray.reduce(reducer, startingPoint)
// }
//
// function reduce(sourceArray){
//
//     const reducer = function(accumulator, currentValue){
//         if(!!accumulator == true && !!currentValue == true){
//             return true;
//         } else {
//             return false;
//         }
//     }
//     return sourceArray.reduce(reducer, true)
// }
//
// function reduce(sourceArray){
//     const reducer = function(accumulator, currentValue){
//         if(accumulator == true){
//             return true
//         } else {
//             return !!currentValue
//         }
//     }
//     return sourceArray.reduce(reducer, false)
// }
