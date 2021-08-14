//클래스
class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string,age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
   
}

const show = new Human("Anchangwan", 27, "male");

console.log(show.name);


// 객체를 함수에 전달하는 방법
//interface 사용
interface Human {
    name:string;
    age:number;
    gender: string;
}

const person = {
    name:"anchangwan",
    age:27,
    gender:"male"
}

const how_to_get_object = (person: Human):string => {
    return `you are ${person.name}, now is ${person.age}, you are a ${person.gender}`
}




//typescript 타입 선언, 받아야될 매개변수 타입 함수에서 return할 함수타입을 지정해줘야 한다.
// const start_function = (name:string, age:number, address:string):string => {
//     return `you are ${name}, now is ${age}, now ${address}`
// }

console.log(how_to_get_object(person));