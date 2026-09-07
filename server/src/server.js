const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const db = require('./config/db')

const app = express()

//middleware
app.use(cors())
app.use(express.json())

// cors enable
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

//routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'))

const dbconnection = async () => {
    try {
        const res = await db.query("SELECT NOW()");
        console.log("Postgres connected successfully: ", res.rows[0].now);
    } catch (error) {
        console.error(error.message)
    }
}

dbconnection()

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})

app.get("/", (req, res) => {
    res.send("Hey there!")
})

app.get('/api/users', (req, res) => {
    res.send("Welcome to the Users API")
});

app.get('/api/bookings', (req, res) => {
    res.send("Welcome to the bookings API")
})

