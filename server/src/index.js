const express = require('express')
const cors = require('cors')
const connect = require('./db/connect')
const usersRouter = require('./routes/usersRouter')
const menuRouter = require('./routes/menuRouter')
const tablesRouter = require('./routes/tablesRouter')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(usersRouter);
app.use(menuRouter);
app.use(tablesRouter);

connect()

console.log(process.env)
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})