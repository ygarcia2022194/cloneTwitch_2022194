export const validateTitle = (title) =>{
    return title.length >=3 && title.length <= 30
}

export const validateTitleMessage = 'El titulo tiene que tener minimo 3 caracteres y maximo 30'