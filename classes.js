
//==============================================
//Classes

//Generador de amigos, plantilla, molde
class Friend {
  //Propiedades
  //el constructor recibe los datos de cada amigo
  constructor(name, age) {
    this.name = name
    this.age = age
    this.isFriend = true
  }

  //métodos
  sayHello() {
    console.log("Hola!")
  }

  sayBye() {
    console.log("Adios!")
  }

  //Usando this
  sayName() {
    console.log(`Mi nombre es: ${this.name}`)
  }

  //Actualizando cosas
  birthday() {
    this.age += 1
  }
}

const guille = new Friend("Guille", 29)
const teo = new Friend("Teo", 30)
guille.sayName()
teo.sayName()

//herencia
class BestFriend extends Friend {
  //el constructor recibe los datos 
  constructor(name, age, bestFriendName) {
    //el super le da los datos necesarios al padre (clase Friend)
    super(name, age)
    this.bestFriendName = bestFriendName
    this.isFriend = false
    this.isBestFriend = true
  }

  introduceBestFriend() {
    console.log(`Soy ${this.name}, el mejor amigo de ${this.bestFriendName}`)
  }
}


const superAmigo = new BestFriend("Victor", undefined, "Guille")
superAmigo.introduceBestFriend()
//las clases heredadas comparten los métodos y propiedades del padre
superAmigo.sayHello()
