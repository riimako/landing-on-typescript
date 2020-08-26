enum UserResponse {
  No = 0,
  Yes = 1,
}

console.log(UserResponse.Yes);

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum Shape {
  Circle,
  Square,
}

interface Circle {
  kind: Shape.Circle;
  radius: number;
}

interface Square {
  kind: Shape.Square;
  sideLength: number;
}

let c: Circle = {
  kind: Shape.Square,
  radius: 100,
};
