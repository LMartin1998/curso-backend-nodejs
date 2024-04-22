const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app  = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// const whitelist = ['http://localhost:8080', 'https://myapp.com'];
// const options = {
//   origin: (origin, callback) => {
//     if(whitelist.includes(origin)){
//       callback(null, true)
//     } else {
//       callback(new Error('no permitido'));
//     }
//   }
// }

app.use(cors()); //Aquí aceptamos a todos los request
// app.use(cors(options));


app.get('/api', (req, res) => {
  res.send('Server high');
})

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if(limit && offset){
//     res.json({
//       limit, offset
//     })
//   } else {
//     res.send('No exist params');
//   }
// })


app.listen(port, () => {
  console.log('Port' + port);
})
