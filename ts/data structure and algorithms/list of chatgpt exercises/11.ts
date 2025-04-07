// Dado um e-mail,
// valide se ele contém @ e um domínio válido (exemplo: @gmail.com, @outlook.com).

const validEmail: string = "pentestpontodev@gmail.com"
const invalidEmail: string = "pentestpontodev"

const isvalidEmail = (email: string):boolean => {
    return email.includes("@gmail.com") || email.includes("@outlook.com")  || email.includes("@hotmail.com") 
}

console.log(isvalidEmail(validEmail))
console.log(isvalidEmail(invalidEmail))