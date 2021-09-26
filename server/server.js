//dependencies
const mongoose = require('mongoose');
//internal imports
const app = require('./app');

//database connection
mongoose
   .connect(process.env.MONGODB_CONNECTION_STRING)
   .then(() => {
      console.log(`App is sucessfully connected to the database`);
   })
   .catch((error) => console.log(error));

//configure the port
const PORT = process.env.PORT || 5000;

//start the server
app.listen(PORT, () => console.log(`App is alive on localhost:${PORT}`));
