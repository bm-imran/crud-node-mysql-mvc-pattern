const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res)=>{
    res.send("welcome to node and mysql crud")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })