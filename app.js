const express = require('express');
const app = express();

app.get('/math/add/', (req, res) => {
  let obj = {};
  obj.input = req.query
  obj.sumString = `${req.query['a']} + ${req.query['b']}`
  obj.sum = parseInt(req.query['a']) + parseInt(req.query['b'])
  // console.log(req.query['a'])
  res.json(obj)

})

app.get('/math/subtract/', (req, res) => {
  let obj = {};
  obj.input = req.query
  obj.subString = `${req.query.a} - ${req.query.b}`
  obj.sum = parseInt(req.query.a) - parseInt(req.query.b)
  res.json(obj)
})

app.get('/math/multiply/', (req, res) => {
  let obj = {};
  obj.input = req.query;

  obj.productString = Object.values(req.query).join(" * ")

  // console.log(Object.values(req.query));
  obj.product = Object.values(req.query).reduce((acc, curr) => {
    return acc * curr
  })

  // check.forEach(el => {
  //   obj.productString *= `${el}`
  // })

  // obj.input = req.query;
  // console.log(req.query)
  // obj.productString = `${req.query.a} * ${req.query.b}`
  // obj.product = parseInt(req.query.a) * parseInt(req.query.b)
  res.json(obj)
})

app.get('/math/div/', (req, res) => {
  let obj = {};
  obj.input = req.query;
  obj.divideString = `${req.query['a']} / ${req.query['b']}`
  obj.divide = parseInt(req.query['a'] / parseInt(req.query['b']))
  res.json(obj)
})

app.listen(2000, () => {
  console.log("you are listening to localhost:2000")
});
