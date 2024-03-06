
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); //less hackers know about our stack



const port = 8080;

//Get Request

app.get('/', (req, res) => {
  res.status(201).json("Home GET  Request");
});



//API's ROUTE
app.use('/api', router)




connect().then(() => {
  try {
    // start server
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    });
  } catch (error) {
    console.log('Cannot start the server:', error);
  }
}).catch(error => {
  console.log('Invalid database connection:', error);
});


