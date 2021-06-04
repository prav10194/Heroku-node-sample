const express = require('express')
const path = require('path');

const app = express()
const port = process.env.PORT || 8000

app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/index.html'))
})

app.get('/auth', (req, res) => {
  if(req.query.username == "admin" && req.query.password == "admin@123"){
    res.send({"message": "success"});
  } else {
    res.send({"message": "user not autheticated"});
  }
})

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/dashboard.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
