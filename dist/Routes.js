"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _PostController = require('./controllers/PostController'); var _PostController2 = _interopRequireDefault(_PostController);
var _Post = require('./schemas/Post'); var _Post2 = _interopRequireDefault(_Post);


class Routes{
    
    
     constructor(){
        this.router = _express.Router.call(void 0, );
        this.post();
        this.view();
    }

     post(){
        this.router.post('/post', _PostController2.default.store);
        this.router.get('/post', _PostController2.default.index);
        this.router.delete('/post', _PostController2.default.delete);
    }

     view(){
        this.router.get('/', async(req,res) =>{
            const posts = await _Post2.default.find({});
            res.render('index', {posts})
        })
    }
}

exports. default = new Routes().router;