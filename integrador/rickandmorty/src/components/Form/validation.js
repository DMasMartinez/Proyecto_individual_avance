



const validate = (input) => {
    const errors = {}
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    const validateEmail = input.email && input.email.length<=35 && regexEmail.test(input.email)
    if (!validateEmail){
        errors["email"] = "este email no es valido"
    }else{
        errors["email"] = ""
    }
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    const validatePassword = regexPassword.test(input.password)
    if (!validatePassword && input.password){
        errors["password"] =  "este password no es valido"
    }else {
        errors["email"] = ""
    }
    return errors
}

export default validate















// export default function validate(inputs){
//     const errors = {}
//     const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;



//     const validateEmail = inputs.email.length && inputs.email.length <= 35 && regexEmail.test(inputs.email)
//     if (inputs.email && !validateEmail){
//         errors['email'] = "ingresa un email valido"

//     }else {
//         errors['email']= '';

//     }

//     const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     const validatePassword = regexPassword.test(inputs.password);
//     if (!validatePassword && inputs.password){
//         errors["password"] = "ingresa un password valido";

//     }else {
//         errors["password"] = "";
//     }

// return errors
// }