import express from 'express';
import HomeRoutes from '../Routes/Home.js'
import UserRoutes from '../Routes/UserRoutes.js'
import StarRoutes from '../Routes/starRoutes.js'
import connectDB from '../Configs/db.js';
import expressListEndpoints from 'express-list-endpoints';
import cors from 'cors';
import 'dotenv/config'

connectDB();
const app = express();

// console.log(`Port from env file is ${process.env.PORT}`)
const PORT = process.env.PORT
app.use(cors())
app.use(express.json())
app.use('/api', UserRoutes)
app.use('/home', HomeRoutes)
app.use('/api/star', StarRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'I am awesome' })
})


console.log(expressListEndpoints(app))
app.listen(PORT, () => {
  console.log(`Started Listening on the server at ${PORT}`)
})
