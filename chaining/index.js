let o = a => {
  let scaffold = {

    a: f => {
      console.log('a');
      // f is an operation
      if (typeof f === 'function' && typeof a === 'object') {
        let op = f;
        let result = [];
        for (var i = 0; i < a.length; i++) {
          result.push(op(a[i]));
        }
        // console.log(a, result);
        a = result;
      }
      return scaffold;
    },

    b: f => {
      console.log('b');
      // f is a predicate
      if (typeof f === 'function' && typeof a === 'object') {
        let pred = f;
        let result = [];
        for (var i = 0; i < a.length; i++) {
          if (pred(a[i])) {
            result.push(a[i]);
          }
        }
        // console.log(a, result);
        a = result;
      }
      return scaffold;
    },

    c: (f, acc) => {
      console.log('c');
      // f is a reducer with an accumulator
      if (typeof f === 'function' && typeof a === 'object' && typeof acc !== 'undefined') {
        let result = acc;
        let reducer = f;
        for (var i = 0; i < a.length; i++) {
          result = reducer(result, a[i]);
        }
        // console.log(a, result);
        a = result;
      }
      return scaffold;
    },

    d: f => {
      console.log('d');
      return a;
    }
  };
  return scaffold;
};

let ltten = o([1, 3, 4, 5, 9, 12, 30])
    .a()
    .b(e => e < 10)
    .c()
    .d();
console.log(ltten); // [ 1, 3, 4, 5, 9 ]

let doublethrees = o([1, 3, 4, 5, 9, 12, 30, 33, 47])
    .a(e => 2 * e)
    .b(e => e % 3 === 0)
    .c()
    .d();
console.log(doublethrees); // [ 6, 18, 24, 60, 66 ]

let summed = o([1, 2, 3])
    .a(e => 3 * e)
    .b(e => e % 3 === 0)
    .c((p, c) => { return p + c; }, 0)
    .d();
console.log(summed);
