const apiRoutes = require('./routes/api');
const indexRoutes = require('./routes');
const express = require('express');

const app = express();
const path = require('path');
const port = process.env.PORT || 80;

// Eventually we will need to refer to the build folder for production
// It would look like:
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}

app.use('/*', indexRoutes);
app.use('/api', apiRoutes);

app.use('/5-gwoap/adopt-a-family/', express.static(
  path.join(
    process.cwd(),
    process.env.NODE_ENV === 'development' ? 'public' : 'build'
  )
));

app.listen(port, () => console.log(`Listening on port ${port}!`));