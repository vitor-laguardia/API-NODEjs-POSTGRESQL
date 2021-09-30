import app from './source/app';

const port = 3333;

app.listen(port, () => {
  console.log({"status": "Server is Running!"});  
});