import { useState } from "react"
import { Logo } from "./Logo"
import { Input } from "./Input"
import {
    validationEmailMessage,
    passwordValidationMessage,
    passwordConfirmationMessage,
    validateUserNameMessage,
    validateEmail,
    validatePassword,
    validateUserName,
    validatePasswordConfirm
} from '../shared/validators'
import { useRegister } from "../shared/hooks/useRegister"

export const Register =({switchAuthHandler})=>{
    const {register, isLoading} = useRegister()
    const [formState, setFormState] = useState({
        email:{
            value:"",
            isValid: false,
            showError: false
        },
        password:{
            value:"",
            isValid: false,
            showError: false
        },
        passwordConfir:{
            value:"",
            isValid: false,
            showError: false
        },
        username:{
            value:"",
            isValid: false,
            showError: false
        }
    })
    const handleInputValueChange = (value, field)=>{
        setFormState((prevState)=>({
            ...prevState,
            [field]:{
                ...prevState[field],
                value
            }
        }))
    }

    const handlerInputValidationOnBlur = (value,field) =>{
        let isValid = false 
        switch(field){
            case 'email':
                isValid = validateEmail(value)
                break;
            case 'password':
                isValid = validatePassword(value)
                break;
            case 'passwordConfir':
                isValid = validatePasswordConfirm(formState.password.value, value)
                break;
            case 'username':
                isValid = validateUserName(value)
                break;
            default:
                break;
        }
        setFormState((prevState)=>({
            ...prevState,
            [field]:{
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))  
    }
    const handleRegister = (event) => {
        event.preventDefault()
        register(formState.email.value, formState.password.value, formState.username.value)
    }
    const isSubmitButtonDisabled = 
    isLoading || 
    !formState.password.isValid || 
    !formState.email.isValid || 
    !formState.username.isValid ||
    !formState.passwordConfir.isValid
    return(
        <div className="login-container">
            <Logo text={'Register to Kinal Cast'}/>
            <form className="auth-form">
                <Input
                    field='email'
                    label='Email'
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handlerInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={validationEmailMessage}
                />
                <Input
                    field='username'
                    label='Username'
                    value={formState.username.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handlerInputValidationOnBlur}
                    showErrorMessage={formState.username.showError}
                    validationMessage={validateUserNameMessage}
                />
                <Input
                    field='password'
                    label='Password'
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handlerInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={passwordValidationMessage}
                />
                <Input
                    field='passwordConfir'
                    label='Password Confirmation'
                    value={formState.passwordConfir.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handlerInputValidationOnBlur}
                    showErrorMessage={formState.passwordConfir.showError}
                    validationMessage={passwordConfirmationMessage}
                />
                <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
                    Register
                </button>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                ¿Ya tienes una cuenta? ¡Inicia Sesión acá...!
            </span>

        </div>
    )
}