const constant: string = "Riina";
constant = "David";

let notConstant: string = "Riina";
notConstant = "David";

function f(shouldInitialize: boolean) {
  let a = 100;

  if (shouldInitialize) {
    var x = a + 1;
    return x;
  }

  return x;
}

f(true);
f(false);

function h(input: boolean) {
  let a = 100;

  if (input) {
    let b = a + 1;
    return b;
  }

  return b;
}

y++;
var y;

a++;
let a;
