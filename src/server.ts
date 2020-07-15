import app from "./App";

const port: number = parseInt(process.env.PORT) || 8080;

app.listen(port, (err) =>{
    if(!err){
        console.log(`Server listening on port ${port}`);
        return;
    }
    console.log(`Express error: ${err}`);
})