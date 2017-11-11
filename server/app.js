const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3005;
const indexRoutes = require('./routes');
const apiRoutes = require('./routes/api');

app.use('/', indexRoutes);
app.use('/api', apiRoutes);

app.use('/5-gwoap/adopt-a-family/', express.static(
  path.join(
    process.cwd(),
    process.env.NODE_ENV === "development" ? "public" : "build"
  )
));

app.listen(port, () => console.log(`Listening on port ${port}!`));