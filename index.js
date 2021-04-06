const express = require('express')
const app = express()

app.get('/', (req, res) => {
   res.send('Hello There!')
})

app.get('/info', (req, res) => {
  console.log("HOST")
  console.log(req.get("host"))
  console.log(" ")
  console.log(" ")
  console.log("ORIGIN")
  console.log(req.get("origin"))
  console.log(" ")
  console.log(" ")
  console.log("HOST")
  console.log(req.headers.host)
  console.log(" ")
  console.log(" ")
  console.log("ORIGIN")
  console.log(req.headers.origin)
  console.log(" ")
  console.log(" ")
  console.log("HOSTNAME")
  console.log(req.hostname)
  console.log(" ")
  console.log(" ")
  console.log("HEADERS")
  console.log(req.headers)
  console.log(" ")
  console.log(" ")
  console.log("FULL REQUEST")
  console.log(req);
  
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening`)
})
