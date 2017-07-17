var iterable = {};
iterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

console.log('id: ', iterable.next());
console.log('id: ', iterable.next());
console.log('id: ', iterable.next());