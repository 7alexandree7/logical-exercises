// Você tem um array de objetos representando usuários. 
// Filtre apenas os usuários que estão ativos (isActive: true).

type User = {
    id: number;
    name: string;
    isActive: boolean;
}

const users: User[] = [
    { id: 1, name: "Alice", isActive: true },
    { id: 2, name: "Bob", isActive: false },
    { id: 3, name: "Charlie", isActive: true }
  ];


const usersActive: User[] = users.filter((user) => user.isActive === true)
const showUsersName: string = usersActive.map((user) => user.name).join(", ").replace(",", "  ")

console.log(showUsersName)