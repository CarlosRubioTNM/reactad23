/*let React = require("react");
let ReactDOM = require("react-dom");*/
import React from "react";
import ReactDOM from "react-dom";

//Usando React
//ReactDOM.render(<h1>Holis</h1>, document.getElementById("asdf"));

//Usando JS Vanilla
/*let h1 = document.createElement("h1");
h1.innerHTML = "Hola con JS";
document.getElementById("asdf").appendChild(h1);*/


function suma(val1, val2) {
    if (val1 && val2) {
        return val1+val2;
    }
    return 0;
}
//Insertar variables en React
//Las expresiones se pueden colocar dentro de llaves para que sean evaluadas.
//Las sentencias no se pueden colocar.
let firstName = "Jonathan";
let lastName = "Duran";
ReactDOM.render(
    <div>
    <h1>Holis</h1>
    <p>Hola {firstName} {lastName} {suma(null,6)}</p>
    <p>Copyright {new Date().getFullYear()}. Todos los derechos reservados.</p>
    </div>
, document.getElementById("asdf"));