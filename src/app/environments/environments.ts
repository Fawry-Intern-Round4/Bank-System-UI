import { HttpHeaders } from '@angular/common/http';

export const myHost = () => {
  return 'https://bank-api-service-iiyh.onrender.com';
};

export const saveToken = (token: String) => {
  sessionStorage.setItem('token', String(token));
};

export const getToken = () => {
  return sessionStorage.getItem('token');
};

export const logOut = () => {
  sessionStorage.clear();
};
