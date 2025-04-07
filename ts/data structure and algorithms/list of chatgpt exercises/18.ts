const checkNames: string[] = [
    "alexandre",
    "pedro",
    "maria",
    "jose",
    "maria",
    "jose",
    "jose",
    "pedro",
    "maria",
]


const uniqueEmails2: string[] = checkNames.filter((email:string, index:number, array:string[]) => {
    return array.indexOf(email) === index
})

console.log(uniqueEmails2)