import express from 'express';
import HomeRoutes from './Routes/Home.js'
import 'dotenv/config'

const app = express();

// console.log(`Port from env file is ${process.env.PORT}`)
const PORT = process.env.PORT
app.use(express.json())
app.use('/home', HomeRoutes)

app.get('/', (req, res) => {
  res.json({message: 'I am awesome'})
})


app.listen(PORT, ()=> {
  console.log(`Started Listening on the server at ${PORT}`)
})
