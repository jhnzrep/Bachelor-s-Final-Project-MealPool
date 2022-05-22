import { EmptyObject } from "react-hook-form";


export type LoginUser = {
    textInputEmail: EmailValues;
    textInputPassword: PasswordValues;
};
  
export type EmailValues = {
    value: string;
    error: string;
};

export type PasswordValues = {
    value: string;
    error: string;
};
  
 export type RegisterUser = {
    id?: string;
    fnameVal: string;
    lnameVal: string;
    emailVal: string;
    passwordVal: string;
    dobVal: Date;
    streetVal: string;
    cityVal: string;
    countryVal: string;
    postalCodeVal: string;
    phoneVal: string;
    reviewObj: Array<EmptyObject>
};

export type UserSearch = {
    searchVal: string;
};



export const userValue = [{
    fnameVal: "",
    lnameVal: "",
    emailVal: "",
    passwordVal: "",
    dobVal: new Date(),
    streetVal: "",
    cityVal: "",
    countryVal: "",
    postalCodeVal: "",
    phoneVal: "",
    reviewObj: []
  }]

