//Objetos

const friend = {
  //Propiedades
  name: "Guille",
  age: 22,
  //Métodos
  sayHello: function () {
    console.log("Hola!")
  },
  //Diferente sintaxis
  sayBye: () => console.log("Adios!"),

  //Usando this
  sayName: () => console.log(`Mi nombre es: ${this.name}`),

  //Actualizando cosas
  birthday: () => this.age += 1
}

friend.sayHello()
friend.sayBye()

//Añadir valores nuevos (SET): 
friend.height = 1.70
friend["eyeColor"] = "brown"

//Consultar valores (GET):
console.log("Mi amigo se llama: ", friend.name, " y tiene ", friend.age, " años")
console.log(friend["eyeColor"])
console.log(friend.height)

