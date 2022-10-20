const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
//   const customerInfo = (order) => {
//     // Adicione abaixo as informações necessárias. “
//     const address = 'address';
//     const ana = order.order.delivery.deliveryPerson;
//     const rafael = order['name'];
//     const phone = order['phoneNumber'];
//     const street = order[address].street;
//     const number = order[address].number;
//     const apto = order[address].apartment;

//     console.log(`Olá ${ana}, entrega para: ${rafael}, Telefone: ${phone}, R. ${street}, Nº ${number}, AP: ${apto}.`);
//   };
  
//   customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias. 
     const newOrder = Object.assign(order);
     newOrder.name = 'Luiz Silva';
     const newClient = newOrder['name'];
     const newPayment = newOrder.payment = '50,00';
     const drink = newOrder.order.drinks.coke['type'];
     const pizzas = Object.keys(newOrder.order.pizza);

    //  let newPizza = [];
    //  const arrayPizza = newOrder.order.pizza;
    //  const pizza = (arrayPizza) => {
           
    //     for(let i in arrayPizza) {
    //         newPizza.push(arrayPizza[i]);
    //     }
    //     return newPizza;
    //  }
     
     console.log(`Olá ${newClient}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$ ${newPayment}.`);
  }
  orderModifier(order);