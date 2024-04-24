export const validateUserName = (user) =>{
    const regex = /^\S{3,8}$/

    return regex.test(user);
}

export const validateUserNameMessage = 'El user tiene que tener minimo 3 y maximo 8 caracteres'