let express=require('express')
let app=express()
let cors=require('cors')
//app.set('view engine', 'ejs');

let userroute=require('./routes/userroute')
let db=require('./config/config')
const { setRandomFallback } = require('bcryptjs')
let port=process.env.PORT || 4040


app.use(express.json());
app.use(express.urlencoded());

app.use(cors({
    origin:"*",
    methods:['GET','POST','PUT','DELETE']
}))
app.use(express.json());
db.dbconnect()
app.get('/',(req,res)=>{
    res.send(' i am batman')
})

app.use('/api',userroute)


app.listen(port)