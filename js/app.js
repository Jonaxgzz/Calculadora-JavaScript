var display = document.getElementById("display")
var operandos = {
      operador: "",operadorAnt: "",numAnt: 0
    }

var calculadora = {
  init: function(){

    var cero = document.getElementById("0")
    var uno = document.getElementById('1')
    var dos = document.getElementById('2')
    var tres = document.getElementById('3')
    var cuatro = document.getElementById('4')
    var cinco = document.getElementById('5')
    var seis = document.getElementById('6')
    var siete = document.getElementById('7')
    var ocho = document.getElementById('8')
    var nueve = document.getElementById('9')
    var punto = document.getElementById('punto')
    var on = document.getElementById('on')
    var sign = document.getElementById('sign')
    var raiz = document.getElementById('raiz')
    var div = document.getElementById('dividido')
    var por = document.getElementById('por')
    var menos = document.getElementById('menos')
    var mas = document.getElementById('mas')
    var igual = document.getElementById('igual')

    cero.addEventListener("click",function(){
      console.log("hice click en 0")
    })
    cero.addEventListener("mousedown", function(){
      cero.setAttribute("style","transform:scale(0.95,0.95)")
    })
    cero.addEventListener("mouseup", function(){
      cero.setAttribute("style","transform:scale(1,1)")
    })

    uno.addEventListener("click",function(){
      console.log("hice click en 1")
    })
    uno.addEventListener("mousedown", function(){
      uno.setAttribute("style","transform:scale(0.95,0.95)")
    })
    uno.addEventListener("mouseup", function(){
      uno.setAttribute("style","transform:scale(1,1)")
    })

    dos.addEventListener("click",function(){
      console.log("hice click en 2")
    })
    dos.addEventListener("mousedown", function(){
      dos.setAttribute("style","transform:scale(0.95,0.95)")
    })
    dos.addEventListener("mouseup", function(){
      dos.setAttribute("style","transform:scale(1,1)")
    })

    tres.addEventListener("click",function(){
      console.log("hice click en 3")
    })
    tres.addEventListener("mousedown", function(){
      tres.setAttribute("style","transform:scale(0.95,0.95)")
    })
    tres.addEventListener("mouseup", function(){
      tres.setAttribute("style","transform:scale(1,1)")
    })

    cuatro.addEventListener("click",function(){
      console.log("hice click en 4")
    })
    cuatro.addEventListener("mousedown", function(){
      cuatro.setAttribute("style","transform:scale(0.95,0.95)")
    })
    cuatro.addEventListener("mouseup", function(){
      cuatro.setAttribute("style","transform:scale(1,1)")
    })

    cinco.addEventListener("click",function(){
      console.log("hice click en 5")
    })
    cinco.addEventListener("mousedown", function(){
      cinco.setAttribute("style","transform:scale(0.95,0.95)")
    })
    cinco.addEventListener("mouseup", function(){
      cinco.setAttribute("style","transform:scale(1,1)")
    })

    seis.addEventListener("click",function(){
      console.log("hice click en 6")
    })
    seis.addEventListener("mousedown", function(){
      seis.setAttribute("style","transform:scale(0.95,0.95)")
    })
    seis.addEventListener("mouseup", function(){
      seis.setAttribute("style","transform:scale(1,1)")
    })

    siete.addEventListener("click",function(){
      console.log("hice click en 7")
    })
    siete.addEventListener("mousedown", function(){
      siete.setAttribute("style","transform:scale(0.95,0.95)")
    })
    siete.addEventListener("mouseup", function(){
      siete.setAttribute("style","transform:scale(1,1)")
    })

    ocho.addEventListener("click",function(){
      console.log("hice click en 8")
    })
    ocho.addEventListener("mousedown", function(){
      ocho.setAttribute("style","transform:scale(0.95,0.95)")
    })
    ocho.addEventListener("mouseup", function(){
      ocho.setAttribute("style","transform:scale(1,1)")
    })

    nueve.addEventListener("click",function(){
      console.log("hice click en 9")
    })
    nueve.addEventListener("mousedown", function(){
      nueve.setAttribute("style","transform:scale(0.95,0.95)")
    })
    nueve.addEventListener("mouseup", function(){
      nueve.setAttribute("style","transform:scale(1,1)")
    })

    punto.addEventListener("click",function(){
      console.log("hice click en .")
    })
    punto.addEventListener("mousedown", function(){
      punto.setAttribute("style","transform:scale(0.95,0.95)")
    })
    punto.addEventListener("mouseup", function(){
      punto.setAttribute("style","transform:scale(1,1)")
    })

    on.addEventListener("click",function(){
      console.log("hice click en on")
    })
    on.addEventListener("mousedown", function(){
      on.setAttribute("style","transform:scale(0.95,0.95)")
    })
    on.addEventListener("mouseup", function(){
      on.setAttribute("style","transform:scale(1,1)")
    })

    sign.addEventListener("click",function(){
      console.log("hice click en sign")
    })
    sign.addEventListener("mousedown", function(){
      sign.setAttribute("style","transform:scale(0.95,0.95)")
    })
    sign.addEventListener("mouseup", function(){
      sign.setAttribute("style","transform:scale(1,1)")
    })

    raiz.addEventListener("click",function(){
      console.log("hice click en raiz")
    })
    raiz.addEventListener("mousedown", function(){
      raiz.setAttribute("style","transform:scale(0.95,0.95)")
    })
    raiz.addEventListener("mouseup", function(){
      raiz.setAttribute("style","transform:scale(1,1)")
    })

    div.addEventListener("click",function(){
      console.log("hice click en dividir")
    })
    div.addEventListener("mousedown", function(){
      div.setAttribute("style","transform:scale(0.95,0.95)")
    })
    div.addEventListener("mouseup", function(){
      div.setAttribute("style","transform:scale(1,1)")
    })

    por.addEventListener("click",function(){
      console.log("hice click en X")
    })
    por.addEventListener("mousedown", function(){
      por.setAttribute("style","transform:scale(0.95,0.95)")
    })
    por.addEventListener("mouseup", function(){
      por.setAttribute("style","transform:scale(1,1)")
    })

    menos.addEventListener("click",function(){
      console.log("hice click en -")
    })
    menos.addEventListener("mousedown", function(){
      menos.setAttribute("style","transform:scale(0.95,0.95)")
    })
    menos.addEventListener("mouseup", function(){
      menos.setAttribute("style","transform:scale(1,1)")
    })

    mas.addEventListener("click",function(){
      console.log("hice click en +")
    })
    mas.addEventListener("mousedown", function(){
      mas.setAttribute("style","transform:scale(0.95,0.95)")
    })
    mas.addEventListener("mouseup", function(){
      mas.setAttribute("style","transform:scale(1,1)")
    })

    igual.addEventListener("click",function(){
      console.log("hice click en =")
    })
    igual.addEventListener("mousedown", function(){
      igual.setAttribute("style","transform:scale(0.95,0.95)")
    })
    igual.addEventListener("mouseup", function(){
      igual.setAttribute("style","transform:scale(1,1)")
    })
  }
}

calculadora.init();
