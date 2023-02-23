const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World from MCKVIE here')
})

app.listen(5000, ()=>{
    console.log("Started server");
}
)
