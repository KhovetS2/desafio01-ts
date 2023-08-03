/* const num: number = 13

if (num>15) {
    console.log('Num maior que 15')
}else if (num === 15) {
    console.log('Num igual a 15');
} else{
    console.log('Num menor que 15');    
}

const typeUser = {
    admin: 'Seja bem vindo admin',
    student: 'Você é um estudante',
    viewer: 'Voce pode visualizar'
}

function validateUser(user:string) {
    console.log(typeUser[user as keyof typeof typeUser]);
    
}

const usuario = 'admin'

validateUser(usuario)
validateUser('student')
validateUser('viewer')

//
/* 
for (let i = 0; i < 5; i++) {
    console.log(i);  
}
 */
/* let n = 2
while (n < 6) {
    console.log(n);
    n++
} */

/* 
const array: Array<number> = [1, 2, 3, 4]

const stringArray: string[] = ['a','b', 'c']

console.log('array original', array);

array.push(3)

console.log('array com novo elemento', array);

array.pop()

console.log('array removendo o ultimo elemento', array);
 */
/* 
const array: Array<number> = [1, 2, 3, 4]


array.forEach(num => {
    if (num > 2) {
        console.log(num)
    }

}
)

array.map(num => console.log(num)) */

/* class User {
    name: string = 'Isaque'
    age: number = 21

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name);
    }
}

const user = new User('Isaque',21)

user.showName()

const otherUser = new User('Carlos', 27)
otherUser.showName() */