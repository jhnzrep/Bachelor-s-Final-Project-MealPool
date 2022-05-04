import axios from 'axios';
const API_URL = "http://localhost:5109/";

type DescribableFunction = {
  textInputEmail: EmailValues;
  textInputPassword: PasswordValues;
};
type EmailValues = {
  value: string;
  error: string;
}
type PasswordValues = {
  value: string;
  error: string;
}

const loginUser = ({textInputEmail, textInputPassword} : DescribableFunction ) => {
    console.log("email", textInputEmail.value)
    console.log("password", textInputPassword.value)
    axios
    .post(API_URL + 'login', {
      email: textInputEmail.value ,
      password: textInputPassword.value
    })
    .then(function (response) {
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error.response);
    });
}

const AuthService = {
  loginUser
}
export default AuthService;