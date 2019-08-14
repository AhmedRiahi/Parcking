import express from 'express';
import * as routes from './config/routes';

const app = express();
const port = 3000;


routes.register(app);

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});