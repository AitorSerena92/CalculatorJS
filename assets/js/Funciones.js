// Variabales Principales
var operA;
var operB;
var operacion;

// Var de botones por ID
const resultado = document.getElementById("resultado");
const reset = document.getElementById("reset");
const sum = document.getElementById("sum");
const rest = document.getElementById("rest");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const same = document.getElementById("same");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const cero = document.getElementById("cero");

// Array orientada a Objetos

const numberArrayObject = [
    {
      name: cero,
      value: 0,
    },
    {
      name: one,
      value: 1,
    },
    {
      name: two,
      value: 2,
    },
    {
      name: three,
      value: 3,
    },
    {
      name: four,
      value: 4,
    },
    {
      name: five,
      value: 5,
    },
    {
      name: six,
      value: 6,
    },
    {
      name: seven,
      value: 7,
    },
    {
      name: eight,
      value: 8,
    },
    {
      name: nine,
      value: 9,
    },
    {
      name: sum,
      value: "+",
    },
    {
      name: rest,
      value: "-",
    },
    {
      name: multiply,
      value: "*",
    },
    {
      name: divide,
      value: "/",
    },
    {
      name: same,
      value: "=",
    },
    {
      name: reset,
      value: "C",
    },
  ];

// llamada a la función 

function init() {

    createEvents(numberArrayObject);

}

// Funciones de uso


function numbers(number) {
    resultado.textContent = resultado.textContent + number;
  }
  function limpiar() {
    resultado.textContent = "";
  }
  
  function resetear() {
    resultado.textContent = "";
    operA = 0;
    operB = 0;
    operacion = "";
  }
  
function resolver() {
    if (!isNaN(operB)) {
      showResult();
    } else {
      resetear();
    }
  }
  
function showResult() {
    let res = 0;
    res = operatorResult();
        resetear();
        resultado.textContent = res;
        
      }
      
function operatorResult() {
        switch (operacion) {
          case "+":
            return operA + operB;
          case "-":
            return operA - operB;
          case "*":
            return operA * operB;
          case "/":
            return operA / operB;
        }
      }     

// Crearevento funcional

createEvents = (numberArray) => {
    console.log("numberArray", numberArray); //visualizar el código en consola.
    numberArray.forEach((numberName) => {
    numberName.name.addEventListener("click", () => {
            if (typeof numberName.value === "string" && numberName.value != "=") {
              operacion = numberName.value;
              operA = parseFloat(resultado.textContent);
              limpiar();
            } else if (numberName.value === "=") {
              operB = parseFloat(resultado.textContent);
              resolver();
            } else if (numberName.value === "C") {
              resetear();
            } else {
              numbers(numberName.value);
            }
        })  
        })}