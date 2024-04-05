const express = require('express');
const app = express();

const allRoutes = require('./routes/route')

app.use(allRoutes);

// for all other pages
app.use((req, res, next) => {
    res.send('<h1>page not found</h1>');
});

app.listen(7000,()=>{
    console.log("Server is running...")
})