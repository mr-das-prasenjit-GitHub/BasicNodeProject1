const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World from MCKVIE')
})

app.listen(80, ()=>{
    console.log("Started server");
}
)
