


let guardarvalor = "";
let guardarvalor1 = "";



function funcionboton(){
   
    let btn1 = prompt("Ingrese Nombre del Jugador 1") ;
   

    if(btn1==""){
        guardarvalor = false;
    }else{
        guardarvalor = true;
    }
  

    return guardarvalor;
}

function funcionboton1(){
    
    let btn2 = prompt("Ingrese Nombre del Jugador 2") ;
   
    if(btn2==""){
        guardarvalor1 = false;
    }else{
        guardarvalor1 = true;
    }
  
    return guardarvalor1;
}

function Funcionbotonplay(){
    

    if((guardarvalor==false) && (guardarvalor1==false)){
        alert("Debe Ingresar los Nombres de lo jugadores");

    }
    if((guardarvalor==false) && (guardarvalor1==true)){
        alert("Debe Ingresar El Nombre del jugador 1");
    }

    if((guardarvalor==true) && (guardarvalor1==false)){
        alert("Debe Ingresar El Nombre del jugador 2");
    }
    
    if((guardarvalor==true) && (guardarvalor1==true)){
        alert("Listo? Iniciemos");
        location.href="XO.html";
    }

    

    
}

