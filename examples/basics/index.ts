//boolean NOT Boolean
let isDone: boolean = false;

//number NOT Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//string NOT String
let color: string = "blue";
let favoriteColor = `My favourite color is ${color}`;

let list: number[] = [1, 2, 3];

let x: [string, number];
x = ["hello", 10];
x = [10, "hello"];

let thisIsAny: any = "";
thisIsAny = 1;

function warnUser(): void {
  console.log("This is my warning message");
}
