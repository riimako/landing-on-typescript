type Second = number;
let timeInSecond: number = 10;
let time: Second = 10;

type Tree<T> = {
  value: T;
  left?: Tree<T>;
  right?: Tree<T>;
};

type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: Boolean;
};
