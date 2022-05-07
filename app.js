let express=require('express')
let app=express()
let fileroute=require('./routes/fileroute');
let cors=require('cors')
let userroute=require('./routes/userroute');
let db=require('./config/config')

let port=(process.env.PORT || 4040)


app.use(express.json());
//app.use(express.urlencoded());

app.use(cors({
    origin:"*",
    methods:['GET','POST','PUT','DELETE']
}))

db.dbconnect()
app.get('/',(req,res)=>{
    res.send(' i am batman')
})

app.use('/api',userroute);
app.use('/docs',fileroute)

//bla
app.listen(port)