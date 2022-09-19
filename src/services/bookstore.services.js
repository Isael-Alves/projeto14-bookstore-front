import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.REACT_APP_URL_PROJECT + "";

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/signUp`, body);
  return promise;
}

function signIN(body) {
  const promise = axios.post(`${BASE_URL}/signIn`, body);
  return promise;
}

function getProducts(token) {
  const promise = axios.get(`${BASE_URL}/products`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return promise;
}

function postCart(body, token) {
  const promise = axios.post(`${BASE_URL}/cart`, body, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return promise;
}

function getBooksCart(token) {
  const promise = axios.get(`${BASE_URL}/cart`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return promise;
}

function Status(token){
  console.log('PostStatus '+ token);
  const promise = axios.post(`${BASE_URL}/status`, {token},);
  return promise;
}

export { signUp, signIN, getProducts, postCart, getBooksCart,Status };
