function exibeNome(){
   let nome = document.getElementById("campo-nome").value
   document.getElementById("cabeçalio").innerHTML = "Opa olá, " + nome+ "!"
//   alert(nome)
//console.log (nome)
}







 //exercicio 1 de par ou impar


function exibeNumero(){
   let numero = document.getElementById("campo-numero").value
   if(numero %2 ==0){
       document.getElementById("corpo").innerHTML = "Você inseriu o numero Par "
       }else { document.getElementById("corpo").innerHTML = "Você inseriu o numero impar "
   }
}
 
//exercicio 2 de numeros aleatorios

function aleatorio(){
   let min = parseFloat(document.getElementById ("campo-numerico").value)
   let max = parseFloat (document.getElementById ("campo-numerico01").value)
   let d = parseFloat (document.getElementById ("d").value)
   console.log(typeof (min),min,max,d)
   
   let valAleatorio = []
   for (let i = 0; i<d; i++){
   valAleatorio.push (Math.floor(Math.random() * (max - min + 1)) + min)
   }
   document.getElementById("resultado").innerHTML = valAleatorio
   }


   
   //exercicio 3 de html


   function aleatorio(){
      let min = parseFloat(document.getElementById ("minimo").value)
      let max = parseFloat (document.getElementById ("maximo").value)
      let quant = parseFloat (document.getElementById ("quantidade").value)
           
      let valConfirma = []
      for (let i = 0; i<quant; i++){
      valConfirma.push (Math.floor(Math.random() * (max - min + 1)) + min)
      }
      document.getElementById("resultadoV").innerHTML = valConfirma
      }