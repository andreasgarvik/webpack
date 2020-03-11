const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
	app.use(express.static('build'))
	res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(5000)
