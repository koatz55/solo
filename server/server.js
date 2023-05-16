const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();


app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
// app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/
require('./config/config');    /* This is new */
require('./routes/user.route')(app);
// require('./routes/product.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})