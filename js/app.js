var display = document.getElementById("display")

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
    var dotCount = true;
    var signoMenos = true;


/*--- Botones ---*/
    cero.addEventListener("click",function(){
      if (display.innerHTML === "0"){
        display.textContent = "0";}
        else{
        display.textContent += 0}
        display.innerHTML = display.innerHTML.substring(0, 8);
    })
    cero.addEventListener("mousedown", function(){
      cero.setAttribute("style","transform:scale(0.95,0.95)")
    })
    cero.addEventListener("mouseup", function(){
      cero.setAttribute("style","transform:scale(1,1)")
    })

    uno.addEventListener("click",function(){
      if (display.innerHTML === "0"){
        display.textContent = "1";}
        else{
        display.textContent += 1}
        display.innerHTML = display.innerHTML.substring(0, 8);
    })
    uno.addEventListener("mousedown", function(){
      uno.setAttribute("style","transform:scale(0.95,0.95)")
    })
    uno.addEventListener("mouseup", function(){
      uno.setAttribute("style","transform:scale(1,1)")
    })

    dos.addEventListener("click",function(){
      if (display.innerHTML === "0"){
        display.textContent = "2";}
        else{
        display.textContent += 2}
        display.innerHTML = display.innerHTML.substring(0, 8);
    })
    dos.addEventListener("mousedown", function(){
      dos.setAttribute("style","transform:scale(0.95,0.95)")
    })
    dos.addEventListener("mouseup", function(){
      dos.setAttribute("style","transform:scale(1,1)")
    })

    tres.addEventListener("click",function(){
      if (display.innerHTML === "0"){
        display.textContent = "3";}
        else{
        display.textContent += 3}
        display.innerHTML = display.innerHTML.substring(0, 8);
    })
    tres.addEventListener("mousedown", function(){
      tres.setAttribute("style","transform:scale(0.95,0.95)")
    })
    tres.addEventListener("mouseup", function(){
      tres.setAttribute("style","transform:scale(1,1)")
    })

    cuatro.addEventListener("click",function(){
      if (display.innerHTML === "0"){
        display.textContent = "4";}
        else{
        display.textContent += 4}
        display.innerHTML = display.innerHTML.substring(0, 8);
    })
    cuatro.addEventListener("mousedown", function(){
      cuatro.setAttribute("style","transform:scale(0.95,0.95)")
    })
    cuatro.addEventListener("mouseup", function(){
      cuatro.setAttribute("style","transform:scale(1,1)")
    })

    cinco.addEventListener("click",function(){
      if (display.innerHTML === "0"){
        display.textContent = "5";}
        else{
        display.textContent += 5}
        display.innerHTML = display.innerHTML.substring(0, 8);
    })
    cinco.addEventListener("mousedown", function(){
      cinco.setAttribute("style","transform:scale(0.95,0.95)")
    })
    cinco.addEventListener("mouseup", function(){
      cinco.setAttribute("style","transform:scale(1,1)")
    })

    seis.addEventListener("click",function(){
      if (display.innerHTML === "0"){
        display.textContent = "6";}
        else{
        display.textContent += 6}
        display.innerHTML = display.innerHTML.substring(0, 8);
    })
    seis.addEventListener("mousedown", function(){
      seis.setAttribute("style","transform:scale(0.95,0.95)")
    })
    seis.addEventListener("mouseup", function(){
      seis.setAttribute("style","transform:scale(1,1)")
    })

    siete.addEventListener("click",function(){
      if (display.innerHTML === "0"){
        display.textContent = "7";}
        else{
        display.textContent += 7}
        display.innerHTML = display.innerHTML.substring(0, 8);
    })
    siete.addEventListener("mousedown", function(){
      siete.setAttribute("style","transform:scale(0.95,0.95)")
    })
    siete.addEventListener("mouseup", function(){
      siete.setAttribute("style","transform:scale(1,1)")
    })

    ocho.addEventListener("click",function(){
      if (display.innerHTML === "0"){
        display.textContent = "8";}
        else{
        display.textContent += 8}
        display.innerHTML = display.innerHTML.substring(0, 8);
    })
    ocho.addEventListener("mousedown", function(){
      ocho.setAttribute("style","transform:scale(0.95,0.95)")
    })
    ocho.addEventListener("mouseup", function(){
      ocho.setAttribute("style","transform:scale(1,1)")
    })

    nueve.addEventListener("click",function(){
      if (display.innerHTML === "0"){
        display.textContent = "9";}
        else{
        display.textContent += 9}
        display.innerHTML = display.innerHTML.substring(0, 8);
    })
    nueve.addEventListener("mousedown", function(){
      nueve.setAttribute("style","transform:scale(0.95,0.95)")
    })
    nueve.addEventListener("mouseup", function(){
      nueve.setAttribute("style","transform:scale(1,1)")
    })

    punto.addEventListener("click",function(){
      if (dotCount) {
          display.innerHTML = display.innerHTML + ".";
          dotCount = false;
          }
    })
    punto.addEventListener("mousedown", function(){
      punto.setAttribute("style","transform:scale(0.95,0.95)")
    })
    punto.addEventListener("mouseup", function(){
      punto.setAttribute("style","transform:scale(1,1)")
    })

    on.addEventListener("click",function(){
      display.textContent = 0;
      dotCount = true;
      signoMenos = true;
    })
    on.addEventListener("mousedown", function(){
      on.setAttribute("style","transform:scale(0.95,0.95)")
    })
    on.addEventListener("mouseup", function(){
      on.setAttribute("style","transform:scale(1,1)")
    })

    sign.addEventListener("click",function(){
      if (display.innerHTML === "0"){
        signoMenos = false;
      }
      else {
          display.innerHTML = -(display.innerHTML);
          }
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
      valorPendiente = display.innerHTML;
      display.innerHTML = " ";
      evalStringArray.push(valorPendiente);
      evalStringArray.push("/");
      dotCount = true;
      signoMenos = true;
    })
    div.addEventListener("mousedown", function(){
      div.setAttribute("style","transform:scale(0.95,0.95)")
    })
    div.addEventListener("mouseup", function(){
      div.setAttribute("style","transform:scale(1,1)")
    })

    por.addEventListener("click",function(){
      valorPendiente = display.innerHTML;
      display.innerHTML = " ";
      evalStringArray.push(valorPendiente);
      evalStringArray.push("*");
      dotCount = true;
      signoMenos = true;
    })
    por.addEventListener("mousedown", function(){
      por.setAttribute("style","transform:scale(0.95,0.95)")
    })
    por.addEventListener("mouseup", function(){
      por.setAttribute("style","transform:scale(1,1)")
    })

    menos.addEventListener("click",function(){
      valorPendiente = display.innerHTML;
      display.innerHTML = " ";
      evalStringArray.push(valorPendiente);
      evalStringArray.push("-");
      dotCount = true;
      signoMenos = true;
    })
    menos.addEventListener("mousedown", function(){
      menos.setAttribute("style","transform:scale(0.95,0.95)")
    })
    menos.addEventListener("mouseup", function(){
      menos.setAttribute("style","transform:scale(1,1)")
    })

    mas.addEventListener("click",function(){
      valorPendiente = display.innerHTML;
      display.innerHTML = " ";
      evalStringArray.push(valorPendiente);
      evalStringArray.push("+");
      dotCount = true;
      signoMenos = true;
    })
    mas.addEventListener("mousedown", function(){
      mas.setAttribute("style","transform:scale(0.95,0.95)")
    })
    mas.addEventListener("mouseup", function(){
      mas.setAttribute("style","transform:scale(1,1)")
    })

    igual.addEventListener("click",function(){
      evalStringArray.push(display.innerHTML);
      var resultado = eval(evalStringArray.join(' '));
      display.innerText = resultado;
      evalStringArray = [];
      display.innerHTML = display.innerHTML.substring(0, 8);
    })
    igual.addEventListener("mousedown", function(){
      igual.setAttribute("style","transform:scale(0.95,0.95)")
    })
    igual.addEventListener("mouseup", function(){
      igual.setAttribute("style","transform:scale(1,1)")
    })

/*--- Operaciones ---*/
  var valorPendiente;
  var evalStringArray = [];

  }
}

calculadora.init();
