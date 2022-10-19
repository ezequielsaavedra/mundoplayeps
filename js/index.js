//parseInt
// const nombre = prompt("Cual es su nombre?");
// console.log(nombre);
// if (nombre.toLowerCase ()=== "eze") {
//     alert("Bienvenido "+nombre);
// } else {
//     alert("No eres bienvenido "+nombre);
// }

let num1 = parseInt(prompt("Elija un numero"))
let num2 = parseInt(prompt("Elija otro numero"))
let resultado = (num1+num2)
alert("El resultado es: "+resultado)
if (resultado >10) {
    alert("Muy bien!")
} else {
    alert("Volve a intentar, pelotudo")
}
