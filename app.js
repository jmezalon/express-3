const express = require('express');
const app = express();


app.get('/math/:operator', (req, res) => {
  let obj = {};
  let operator = req.params.operator
  obj.input = req.query
  if (operator === 'add') {

    obj.productString = Object.values(req.query).join(" + ")
    obj.product = Object.values(req.query).reduce((acc, curr) => {
      return acc + curr
    })

  } else if (operator === 'subtract') {

    obj.productString = Object.values(req.query).join(" - ")
    obj.product = Object.values(req.query).reduce((acc, curr) => {
      return acc - curr
    })

  } else if (operator === 'multiply') {

    obj.productString = Object.values(req.query).join(" * ")
    obj.product = Object.values(req.query).reduce((acc, curr) => {
      return acc * curr
    })

  } else if (operator === 'divide') {


    obj.productString = Object.values(req.query).join(" / ")
    obj.product = Object.values(req.query).reduce((acc, curr) => {
      return acc / curr
    })

  }


  res.json(obj)

})

app.listen(2000, () => {
  console.log("you are listening to localhost:2000")
});
