//STRUCTURAL TYPING

interface User {
  name: string;
  id: number;
}
function getAdminUser(): User {
  return { name: "Riina", id: 1 };
}

interface Graduate {
  readonly name: string;
  readonly lastname: string;
  email: string;
  shoesize?: number;
  [propName: string]: any; //index signature
}
function getGraduate(): Graduate {
  let graduate = {
    name: "Riina",
    lastname: "Korpela",
    email: "riina@email.com",
  };
  graduate.name = "Not riina";
  return graduate;
}

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
declare const backpack: Backpack<string>;
const object = backpack.get();
backpack.add(23);
backpack.add("pencil");

interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};
let myErrorSearch: SearchFunc = function (src, sub) {
  return "string";
};

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}
