import express from 'express';
import console from 'winston';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';


const app = express();
const port = 3000;
const devPort = 4000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, './../public')));

app.get('/hello', (req, res) => {
  return res.send('Hello Express.js');
});

if (process.env.NODE_ENV === 'development') {
  console.info('Server is running on DEVELOPMENT mode');
  const config = require('../webpack.dev.config.js');
  const compiler = webpack(config);
  const devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(
    devPort, () => {
      console.info('webpack-dev-server is listening on port ', devPort);
    }
  )
}

app.listen(port, () => {
  console.info('Express is listening on port', port);
});
