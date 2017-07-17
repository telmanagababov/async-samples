const data = [1, 2, 3, 4, 5];

let iterator = getIterator(data);

console.log(iterator.next().value);
console.log(iterator.next().value);

function getIterator(array) {
    var nextIndex = 0; 
    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}