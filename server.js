import express     from "express"
import bodyParser  from "body-parser"
import ServiceCharge from "./lib/services/charge"

const app = express();
const port = process.env.PORT || 3001

app.use(bodyParser.json());

app.post('/api/v1/charge', (req, res)=>{
  ServiceCharge(req.body, (error, response) => res.send(response))
})

app.get('/ping', (req, res)=>{
  res.send('PONG');
});

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`) );
