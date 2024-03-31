import  express  from "express";
 import {dirname} from 'path';
import { fileURLToPath } from "url";
 const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.static(__dirname + '/01'))

app.get("*",(req,res)=>{

    res.sendFile( __dirname + "/test.txt");

})

app.listen(port,()=>{
    console.log(`server is runing on port ${port}`);
})



