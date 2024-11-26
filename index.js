import express from 'express';


const app = express();

app.get('/', (req, res) => {
  res.json({message: 'I am awesome'})
})


app.listen(8000, ()=> {
  console.log("Started Listening on the serve")
})
