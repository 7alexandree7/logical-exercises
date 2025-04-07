//Dado um objeto de usuário,
//remova a propriedade password antes de exibi-lo na interface.

interface User3 {
        id: number;
        name: string;
        email: string;
        password: string;
    }


const user: User3 = { id: 1, name: "Alice", email: "alice@email.com", password: "123456" };
const {password, ...useWithoutPassword} = user
console.log(useWithoutPassword)


// TODO: Retornar um novo objeto sem a propriedade password
