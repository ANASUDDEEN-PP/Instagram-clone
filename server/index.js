const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

//import conections
const connection = require('./DB');
//Start Connection
connection();

//import Routes
const authRoute = require('./Routes/authRoute');

//Use Route
app.use('/', authRoute);

// 404 Route (Catch-All)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Page Not Found' });
});

//port address details
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});