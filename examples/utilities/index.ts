//Partial<Type>

interface AllUser {
  name: string;
  lastName: string;
  id: string;
  address: string;
  city: string;
  phone: string;
  shoeSize?: number;
  favoriteColor?: string;
}

function updateUser(user: AllUser, fieldsToUpdate: Partial<AllUser>) {
  return { ...user, ...fieldsToUpdate };
}

const userBefore: AllUser = {
  name: "Riina",
  lastName: "Korpela",
  id: "1",
  address: "C/Panadella",
  city: "Castellbisbal",
  phone: "123456789",
  shoeSize: 39,
  favoriteColor: "yellow",
};

const userAfter = updateUser(userBefore, {
  address: "Carrer Panadella",
  city: "Barcelona",
});

//Readonly<Type>

//NonNullable<Type>

interface canBeNull {
  id: string | null;
  name: string | null;
}
type NotNullSure = NonNullable<canBeNull>;

//Required<Type>

function updateUserFromAllData(fieldsToUpdate: Required<AllUser>) {
  return { ...fieldsToUpdate };
}

const userAfterRequiredError = updateUserFromAllData(userBefore);

const userBeforeRequired: Required<AllUser> = {
  name: "Riina",
  lastName: "Korpela",
  id: "1",
  address: "C/Panadella",
  city: "Castellbisbal",
  phone: "123456789",
  shoeSize: 39,
  favoriteColor: "yellow",
};

const userAfterRequiredOk = updateUserFromAllData(userBeforeRequired);
