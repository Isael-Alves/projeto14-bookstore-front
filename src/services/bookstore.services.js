import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();


const BASE_URL = process.env.REACT_APP_URL_PROJECT+""

function signUp(body){
    const promise = axios.post(`${BASE_URL}/signUp`,body)
    return promise;
}

function signIN(body){
    console.log('singIN');
    const promise = axios.post(`${BASE_URL}/signIn`,body)
    return promise;
}

export{signUp, signIN}