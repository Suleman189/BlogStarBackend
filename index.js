import express from 'express';
import HomeRoutes from './Routes/Home.js'

const app = express();

app.use(express.json())
app.use('/home', HomeRoutes)

app.get('/', (req, res) => {
  res.json({message: 'I am awesome'})
})


app.listen(8000, ()=> {
  console.log("Started Listening on the serve")
})
