interface Pessoa {
    nome: string;
    idade: number;
    sexo: string;
    idiomas: string[];
}

const pessoas: Record<string, Pessoa> = {

    pessoa01:  {
        nome: 'unfast',
        idade: 20,
        sexo: 'masculino',
        idiomas: ['português', 'ingles', 'español'],
    },

    pessoa02:{
        nome: 'alice',
        idade: 18,
        sexo: 'feminino',
        idiomas: ["arabe", "russo", "japones"],
    },
}

const pessoa01 = pessoas.pessoa01
console.log(pessoa01)

const pessoa02 = pessoas.pessoa02
console.log(pessoa02)
