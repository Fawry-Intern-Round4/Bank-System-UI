export interface UserRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface userAuthResponse{
  token: string;
}