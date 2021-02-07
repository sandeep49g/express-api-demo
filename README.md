> npx express-generator .
> npm install --save cors

then in app.js >
var cors = require('cors');
app.use(cors());

> Change port from bin/www

No need for below separate installations:
npm install --save express serverless-http