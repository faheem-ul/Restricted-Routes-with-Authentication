export const getuserFromLocalStorage = ()=>{
    const user = localStorage.getItem('user')
    if(user){
        return JSON.parse(user);
    }
    return user;
}
export const setUserInLocalStorageonSignUp = (email, password, number)=>{
    const newUser = {
        email,
        password,
        number
    }
    localStorage.setItem("SignUpUser",JSON.stringify(newUser));
}
export const setUserInLocalStorageonLogin = (LoginUser)=>{
    
    localStorage.setItem("LoginUser",JSON.stringify(LoginUser));
}