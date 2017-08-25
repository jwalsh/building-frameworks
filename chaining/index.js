let o = a => {
  let scaffold = {
    a: f => {
      console.log('a');

      return scaffold;
    },
    b: f => {
      console.log('b');
      // f is now a predicate
      let pred = f;
      let base = [];
      for (var i = 0; i < a.length; i++) {
        if (pred(a[i])) {
          base.push(a[i]);
        }
      }
      console.log(a, base);
      a = base;
      return scaffold;
    },
    c: f => { console.log('c'); return scaffold; },
    d: f => { console.log('d'); return a; }
  };
  return scaffold;
};

let out = o([1, 3, 4, 5, 9, 12, 30])
    .a()
    .b(e => e < 10)
    .c()
    .d();

let out = o([1, 3, 4, 5, 9, 12, 30])
    .a(e => 2 * e)
    .b(e => e % 3)
    .c()
    .d();

console.log(out);
