let hadIds = true;
let iterator = getIdIterator();

console.log('id: ', iterator.next());
console.log('id: ', iterator.next());
console.log('id: ', iterator.next());

function* getIdIterator() {
    let id = 0;
    while (hadIds) {
        yield id++;
    }
}