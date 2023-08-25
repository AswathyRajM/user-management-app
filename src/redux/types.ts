export interface userInterface {
  name: string;
  email: string;
  dob: string;
  city: string;
  pincode: string;
}

export interface userListInterface {
  userList: userInterface[];
}

export interface initialStateInterface {
  userList: userInterface[];
  allUser: userInterface[];
  error: null | string;
}

export interface initialStateDialogInterface {
  isOpen: boolean;
}
