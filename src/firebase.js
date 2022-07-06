import React from "react";
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import { getDatabase } from "firebase/database"



const firebaseConfig ={
    "projectId": string,
    "appId": string,
    "databaseURL": string,
    "storageBucket": string,
    "locationId": string,
    "apiKey": string,
    "authDomain": string,
    "messagingSenderId": string,
    "measurementId": string
}


const app = initializeApp(firebaseConfig);
const analytics =getAnalytics(app);

export const database = getDatabase(app);

export default firebaseConfig