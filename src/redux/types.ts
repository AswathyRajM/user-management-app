export interface userInterface {
  name: string;
  email: string;
  DOB: string;
  city: string;
  pincode: number;
}

export interface userListInterface {
  userList: userInterface[];
}

export interface initialStateInterface {
  userList: userInterface[];
  allUser: userInterface[];
  error: null | string;
}
