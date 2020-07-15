"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _App = require('./App'); var _App2 = _interopRequireDefault(_App);

const port = parseInt(process.env.PORT) || 8080;

_App2.default.listen(port, (err) =>{
    if(!err){
        console.log(`Server listening on port ${port}`);
        return;
    }
    console.log(`Express error: ${err}`);
})