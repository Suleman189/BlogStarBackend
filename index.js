const express = require("express")

const app = express();

app.get('/', (req, res) => {
  res.send("Hi there I am working")
})


app.listen(8000, ()=> {
  console.log("Started Listening on the serve")
})
