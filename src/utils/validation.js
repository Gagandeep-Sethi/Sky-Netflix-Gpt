

export const getValidation=(email,password)=>{
    // eslint-disable-next-line no-useless-escape
    const isEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmail)return("email is not valid")
    if(!isPassword)return("password is not strong ")
    return null

}
