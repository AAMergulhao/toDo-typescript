"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);
var _expressejslayouts = require('express-ejs-layouts'); var _expressejslayouts2 = _interopRequireDefault(_expressejslayouts);

var _Routes = require('./Routes'); var _Routes2 = _interopRequireDefault(_Routes);

class App {
    

     constructor() {
        this.express = _express2.default.call(void 0, );
        this.express.use(_bodyparser2.default.urlencoded({
            extended: true
          }));
        this.express.set('views', './views');
        this.express.set('view engine', 'ejs');
        this.express.use(_expressejslayouts2.default);
        this.express.use(_bodyparser2.default.json()) 
        this.routes();
        this.middlewares();
        this.database();
    }

     middlewares() {
        this.express.use(_express2.default.json());
    }

     routes() {
        this.express.use(_Routes2.default);
    }

     database() {
        _mongoose2.default.connect(`mongodb://mongo:27017/toDo`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }).then(() => console.log('DB Connected!')).catch(err => {console.log(Error, err.message)});
    }
}

exports. default = new App().express;