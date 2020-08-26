interface User {
  name: string;
  lastName: string;
}

interface Dress {
  shoeSize: number;
  pantSize?: number;
}

interface MyWorker extends User, Dress {
  id: number;
}

let newWorker: MyWorker = { name: "Riina", lastName: "Korpela", id: 2 };
let oldWorker: MyWorker = {
  name: "Rebecca",
  lastName: "Järvinen",
  id: 3,
  shoeSize: 40,
};
