const express = require('express');
const app = express();
const port = 3000;

//serve static files from the 'public'directory
app.use(express.static('public'));

app.listen(port, )  
 {
console.log('server is running at http://localhost:${port}');
};