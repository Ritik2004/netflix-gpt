export const checkValidate = (email,password) => {
    const isEmailvalid = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/.test(email);
    const isPwdvalid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    
    if(!isEmailvalid) return "Email ID is not valid";
    if(!isPwdvalid) return "Password is not valid"
    
    return null;
}