alert ("Acomodo de Numeros")

let num1 = prompt ("Ingresa un  numero")
let num2 = prompt ("Ingresa otro numero")
let num3 = prompt ("Ingresa ultimo nnumero")

let array = [num1, num2, num3]
array = array.sort()

if (num1 == num2 && num2 == num3){
    alert ("Estos numeros son el mismo" +num1)
}else{
    alert("Estos numeros estan de mayor a menor: " + array)
    alert("Estos numeros estan de menor a mayor: " + array.reverse())
}
