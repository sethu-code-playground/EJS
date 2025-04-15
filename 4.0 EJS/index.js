import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";

const app = express();
const port = 3000;
var directory = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    // res.sendFile(`${directory}/views/index.html`)
    const today = new Date();
    const day = today.getDay();
    // console.log(today, day);
    let type, adv;    

    if(day === 0 || day === 6){
        type = "the weekend";
        adv = "it's time to have some fun";
    }else{
        type = "a weekday";
        adv = "it's time to work hard";
    }
    res.render("index.ejs",{ //therendered file should be inside views directory
            dayType: type, //dynamically rendered data. dayType and advice are names used in view to render data
            advice: adv,
        }
    );
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});