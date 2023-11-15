const express = require('express'),
    app = express();
    bodyparser = require('body-parser');

require('express-async-errors')


const db = require('./db'),
    employeeRoutes = require('./controllers/employee.controller');


//middleware
app.use(bodyparser.json())
app.use('/api/employees', employeeRoutes)


app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})

async function startServer() {
    try {
        await db.query("SELECT 1");
        console.log('db connection succeeded.');
        app.listen(3000, () => {
            console.log('server started at 3000');
        });
    } catch (err) {
        console.log('db connection failed. \n' + err);
        // Handle the error further if needed
    }
}

// Call the async function to start the server
startServer();