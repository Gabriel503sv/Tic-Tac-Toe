

let turno = true;
let posicion = [];
let turnoXO ;

    function resetear(A,B,C){
      document.getElementById('po' + A).style.color ="#456170";
      document.getElementById('po' + B).style.color ="#456170";
      document.getElementById('po' + C).style.color ="#456170";
      setTimeout(function(){
        location.reload();
      },3000)
    }

    function empate_reset(){
      setTimeout(function(){
        location.reload();
      },3000)
    }

    function EncontrarGanador(){
      for(let i = 1 ; i <= 9 ; i++){
        posicion[i] = document.getElementById('po'+ i).innerHTML ;
      }
      if(posicion[1]==posicion[2] && posicion[2]==posicion[3] && posicion[1]!=""){
        alert("El Jugador: " + posicion[1] + " es el ganador" );
        resetear(1,2,3);
      }
      if(posicion[4]==posicion[5] && posicion[5]==posicion[6] && posicion[4]!=""){
        resetear(4,5,6);
        alert("El Jugador: " + posicion[4] + " es el ganador" );
      }
      if(posicion[7]==posicion[8] && posicion[8]==posicion[9] && posicion[7]!=""){
        resetear(7,8,9);
        alert("El Jugador: " + posicion[7] + " es el ganador" );
      }
      //check vertical
      if(posicion[1]=posicion[4] && posicion[4]==posicion[7] && posicion[1]!=""){
        resetear(1,4,7);
        alert("El Jugador: " + posicion[1] + " es el ganador" );
      }
      if(posicion[2]==posicion[5] && posicion[5]==posicion[8] && posicion[2]!=""){
        resetear(2,5,8);
        alert("El Jugador: " + posicion[2] + " es el ganador" );
      }
      if(posicion[3]==posicion[6] && posicion[6]==posicion[9] && posicion[3]!=""){
        resetear(3,6,9);
        alert("El Jugador: " + posicion[3] + " es el ganador" );
      }
      //check Diagonal
      if(posicion[1]==posicion[5] && posicion[5]==posicion[9] && posicion[1]!=""){
        resetear(1,5,9);
        alert("El Jugador: " + posicion[1] + " es el ganador" );
      }
      if(posicion[3]==posicion[5] && posicion[5]==posicion[7] && posicion[3]!=""){
        resetear(3,5,7);
        alert("El Jugador: " + posicion[3] + ". es el ganador" );
      }
      if(posicion[1]!="" && posicion[2]!="" && posicion[3]!="" && posicion[4]!="" && posicion[5]!="",posicion[6]!="" && posicion[7]!="" && posicion[8]!="" && posicion[9]!=""){
        empate_reset();
        alert("Los Jugadores empataron");

      }
    }

    function insertar(id){
    
      let b = document.getElementById(id);
      if(turno && b.innerHTML == ""){
        b.innerHTML="X";
        turno = !turno;
      }
      else if(b.innerHTML == ""){
        b.innerHTML="O";
        turno = !turno;
      }
      EncontrarGanador();
    }

   