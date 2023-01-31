import fs from "fs"
const fsPromises = fs.promises
import path from "path"
import moment from "moment-timezone";
const __dirname = path.resolve();


export const logEvents = async (message ,fileName)=>{
    const dateTime = moment(Date.now()).format('DD/MM/YYYY hh:mm:ss') ;
    const logItem = `${message.agent}\t${message.body}\t${message.method}\t${message.originalUrl}\t${message.params}\t${message.query}\t${message.hostname}\t${message.ip}\t${message.path} \t ${dateTime}\n`
    try {
        if(!fs.existsSync(path.join(__dirname,'..','logs'))){
            await fsPromises.mkdir(path.join(__dirname,'..','logs'))
        }
        console.log(path.join(__dirname,'logs',fileName));
         fs.appendFile(path.join(__dirname,'logs',fileName),logItem,(err)=>{
            if (err) {
                console.log(err);
              }
              else {

                console.log("\nYour file after you appended:")

              }
        });
    } catch (error) {
        console.log(error);
    }
}

export const logger = (req,res,next) =>{
    var obj = {
        agent: req.header('user-agent'), 
        body: JSON.stringify(req.body), 
        method: req.method, 
        originalUrl:req.baseUrl + req.originalUrl, 
        params: JSON.stringify(req.params),
        query: JSON.stringify(req.query),
        hostname: req.hostname,
        ip: req.ip,
        path: req.path,
        time:moment(Date.now()).format('DD/MM/YYYY hh:mm:ss')
      }
      console.log({"body":req.body});
    logEvents(obj,'reqLog.xls')
    console.log(`${req.method} ${req.path}`);
    next()
}

