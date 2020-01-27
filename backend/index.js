const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()

app.enable('trust proxy') // for heroku

app.use(morgan('tiny'))
app.use(helmet())

app.use(express.static('build'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App running in port ${PORT}`)
})
