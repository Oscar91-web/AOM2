let data = {};

data.data = {};

data.data.orders = [];

data.data.orders.push({"ordernr": 123})


// let orders = data.data.orders;
let what = "orders"
let orders = data.data[what];
console.log(orders);