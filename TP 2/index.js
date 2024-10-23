const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
  


];

/* id: objeto nombre e ingrediente: es un array de ingredientes

/* a- Las pizzas que tengan un id impar */

const nombre = [2 , 4, 6];
console.log(nombre);


/* B. RESPONDER:¿ HAY ALGUNA PIZZA QUE VALGA MENOS DE $600? */

const id = true;
if(id >= true) {
  console.log("si hay una pizza mas barata que $600 ");
}

/* C. RESPONDER: ¿EL NOMBRE DE CADA PIZZA CON SU RESPECTIVO PRECIO? */

const nombres = ["pizza de muzarella 500$", "pizza de Cebolla 1500$", "pizza Napolitana $1350", "pizza 4 quesos", 
     "pizza especial 1000$", "pizza con anana $600", "pizza especial $1000", "pizza con anana $600",  ];
     const stringArray = nombres.toString()
     console.log(stringArray);


/* D. Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes 
  de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos 
  recorridos, ya que cada pizza del array de pizzas tiene 
una propiedad "ingredientes" cuyo valor es un array con ingredientes. */

   
constpizzas = [
  {
      nombre: "Pizza Margherita",
      ingredientes: ["tomate", "mozzarella", "albahaca"]
  },
  {
      nombre: "Pizza Pepperoni",
      ingredientes: ["tomate", "mozzarella", "pepperoni"]
  },
  {
      nombre: "Pizza Cuatro Quesos",
      ingredientes: ["mozzarella", "gorgonzola", "parmesano", "cheddar"]
  }
];

pizzas.forEach(pizza => {
  console.log(`Ingredientes de la ${pizza.nombre}:`);
  
  
  pizza.ingredientes.forEach(ingrediente => {
      console.log(`- ${ingrediente}`);
  });

  console.log(''); 
});


       

   








