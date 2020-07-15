import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import expressLayouts from "express-ejs-layouts";

import router from "./Routes";

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.express.use(bodyParser.urlencoded({
            extended: true
          }));
        this.express.set('views', './views');
        this.express.set('view engine', 'ejs');
        this.express.use(expressLayouts);
        this.express.use(bodyParser.json()) 
        this.routes();
        this.middlewares();
        this.database();
    }

    private middlewares(): void {
        this.express.use(express.json());
    }

    private routes(): void {
        this.express.use(router);
    }

    private database(): void {
        mongoose.connect(`mongodb://mongo:27017/toDo`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }).then(() => console.log('DB Connected!')).catch(err => {console.log(Error, err.message)});
    }
}

export default new App().express;