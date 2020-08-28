const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var a = 'tao';
    var b = 'smart';
    var c = a + b;
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})