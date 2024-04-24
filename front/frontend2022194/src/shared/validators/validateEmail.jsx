export const validateEmail = (email) =>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}

export const validationEmailMessage = 'Por favor ingrese un email valido';