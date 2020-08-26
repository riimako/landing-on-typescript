class User {
  public move(distanceInMeters: number = 0) {
    console.log(`User moved ${distanceInMeters}m.`);
  }
}

class Student extends User {
  study() {
    console.log("Let's study!");
  }
}

const riina = new Student();
riina.study();
riina.move(10);
riina.study();

class Cat {
  #name: string;
  private owner: string;
  readonly color: string;
  legs?: number;
  constructor(theName: string, owner: string, color: string, legs: number = 4) {
    this.#name = theName;
  }
}

new Cat("Cat", "Riina", "Black").#name;
new Cat("Cat", "Riina", "Black").legs;

new Cat("Cat", "Riina", "White").owner;

abstract class Cow {
  abstract makeSound(): void;

  move(): void {
    console.log("roaming the earth...");
  }
}
