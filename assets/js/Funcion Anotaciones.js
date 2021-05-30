var operA;
var operB;
var operacion;

var resultado = document.getElementById("resultado");
var reset = document.getElementById("reset");
var sum = document.getElementById("sum");
var rest = document.getElementById("rest");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var same = document.getElementById("same");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var cero = document.getElementById("cero");

const numberArray = [
  cero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
];

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

function init() {
  //variables
  //   alert("Bienvenidos a la Calculadora Básica");
  //   const resultado = document.getElementById("resultado");
  //   const reset = document.getElementById("reset");
  //   const sum = document.getElementById("sum");
  //   const rest = document.getElementById("rest");
  //   const multiply = document.getElementById("multiply");
  //   const divide = document.getElementById("divide");
  //   const same = document.getElementById("same");
  //   const one = document.getElementById("one");
  //   const two = document.getElementById("two");
  //   const three = document.getElementById("three");
  //   const four = document.getElementById("four");
  //   const five = document.getElementById("five");
  //   const six = document.getElementById("six");
  //   const seven = document.getElementById("seven");
  //   const eight = document.getElementById("eight");
  //   const nine = document.getElementById("nine");
  //   const cero = document.getElementById("cero");

  //Eventos
  //   createEvents(numberArray);
  createEvents(numberArrayObject);

  //   one.onclick = function (e) {
  //     resultado.textContent = resultado.textContent + "1";
  //   };
  //   two.onclick = function (e) {
  //     resultado.textContent = resultado.textContent + "2";
  //   };

  //   three.onclick = function (e) {
  //     resultado.textContent = resultado.textContent + "3";
  //   };
  //   four.onclick = function (e) {
  //     resultado.textContent = resultado.textContent + "4";
  //   };
  //   five.onclick = function (e) {
  //     resultado.textContent = resultado.textContent + "5";
  //   };
  //   six.onclick = function (e) {
  //     resultado.textContent = resultado.textContent + "6";
  //   };
  //   seven.onclick = function (e) {
  //     resultado.textContent = resultado.textContent + "7";
  //   };
  //   eight.onclick = function (e) {
  //     resultado.textContent = resultado.textContent + "8";
  //   };
  //   nine.onclick = function (e) {
  //     resultado.textContent = resultado.textContent + "9";
  //   };
  //   cero.onclick = function (e) {
  //     resultado.textContent = resultado.textContent + "0";
  //   };

  //   reset.onclick = function (e) {
  //     resetear();
  //   };

  //   sum.onclick = function (e) {
  //     operA = resultado.textContent;
  //     operacion = "+";
  //     limpiar();
  //   };
  //   rest.onclick = function (e) {
  //     operA = resultado.textContent;
  //     operacion = "-";
  //     limpiar();
  //   };
  //   multiply.onclick = function (e) {
  //     operA = resultado.textContent;
  //     operacion = "*";
  //     limpiar();
  //   };
  //   divide.onclick = function (e) {
  //     operA = resultado.textContent;
  //     operacion = "/";
  //     limpiar();
  //   };

  //   same.onclick = function (e) {
  //     operB = resultado.textContent;
  //     resolver();
  //   };
}

createEvents = (numberArray) => {
  //   console.log("numberArray", numberArray);
  numberArray.forEach((numberName, i) => {
    // console.log("numberName", numberName);
    // console.log("numberName.name", numberName.name);
    // console.log("numberName.value", numberName.value);
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
    // numberName.addEventListener("click", () => {
    //     numbers(i);

    //   });
  });

  //   for (let i = 0; i < numberArray.length; i++) {
  //     numberArray[i].addEventListener("click", () => {
  //       numbers(i);
  //     });
  //   }
};

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
  // !isNaN(operB) igual a isNaN(operB) === false
  // isNaN(operB) igual a isNaN(operB) === true
  if (!isNaN(operB)) {
    showResult();
  } else {
    resetear();
  }
}

function showResult() {
  let res = 0;
  res = operatorResult();
  //   switch (operacion) {
  //     case "+":
  //       res = operA + operB;
  //       break;

  //     case "-":
  //       res = operA - operB;
  //       break;

  //     case "*":
  //       //   res = operA * operB;
  //       res = operA * operB;
  //       break;

  //     case "/":
  //       res = operA / operB;
  //       break;
  //   }
  resetear();
  resultado.textContent = res;
  
}

function operatorResult() {
  switch (operacion) {
    case "+":
      return operA + operB;
    // break;
    case "-":
      return operA - operB;
    // break;
    case "*":
      return operA * operB;
    // break;
    case "/":
      return operA / operB;
    // break;
  }
}
