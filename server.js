import express     from "express"
import bodyParser  from "body-parser"
import morgan from "morgan"
import ServiceCharge from "./lib/services/charge_service"

const app = express();
const port = process.env.PORT || 3001

app.use(morgan('short'))
app.use(bodyParser.json());

app.post('/api/v1/charge', (req, res)=>{
  ServiceCharge(req.body, (error, response) => {
    if(error){
      consol.log(error)
      return res.send({status: 'error'}).status(400);
    }

    res.send({status: 'success', transaction: response})
  })
})

app.get('/ping', (req, res)=>{
  res.send('PONG');
});

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`) );
