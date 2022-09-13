
const fs = require('fs');
let accounts=""
let siz=0;
fs.readFile('OrderData.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
   accounts=JSON.parse(data);
   siz=accounts["orders"].length;
   let sum=0.0;
 console.log("size is"+siz);
 for (let i = 0; i <siz; i++) {
   sum=sum+ accounts['orders'][i]["totalAfterDiscount"];
}
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json()); 

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));


  app.get('/orders', (request, response) => {
    accounts["tot_sum"]=sum;
    console.log(sum);
    response.json(accounts);
  });
  
 

});















