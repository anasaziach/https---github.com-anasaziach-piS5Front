export default class User{
    firstName:String;
    lastName:String;
    age:number;
    sexe:String;
    email:String;
    password:String;


  constructor(firstName: String, lastName: String, age: number, sexe: String, email: String, password: String) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sexe = sexe;
    this.email = email;
    this.password = password;
  }
}
