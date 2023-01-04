const express = require("express")
const { apiHome } = require("./routes/home")
const app = express()

//port
const port = process.env.PORT || 8000

app.get('/home', (req, res) => {
    res.send('Hello!')
})

app.get('/api/home', apiHome)

app.use('*', (req, res) => {
    res.send('<h1>Page not found</h1>')
})

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`)
})