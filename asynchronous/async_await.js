const { log } = require("console");
const { setTimeout } = require("timers");

const takeOrder = (customer, callback) => {
  console.log(`take order for ${customer}`);
  callback(customer);
};
const processOrder = (customer, callback) => {
  console.log(`processing order for ${customer}`);

  callback(customer);

  setTimeout(() => {
    console.log("cokking complete");
    console.log(`order processed for ${customer}`);
  }, 3000); // eta sobal last a print hbe
};

const completeOrder = (customer) => {
  console.log(`completed order for ${customer}`);
};

//function call customer 1
takeOrder("customer 1", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});

//function call customer 2

takeOrder("customer 2",(customer)=>{
	processOrder(customer,(customer)=>{
		completeOrder(customer);
	})
})
