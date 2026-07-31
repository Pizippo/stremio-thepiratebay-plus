const express = require('express');
const serverless = require('./serverless');

const app = express();

app.use((req, res, next) => serverless(req, res, next));
app.listen(process.env.PORT || 10000, '0.0.0.0', () => {
  console.log(`Started addon at: http://any:${process.env.PORT || 10000}`);
});
