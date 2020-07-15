"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _Post = require('../schemas/Post'); var _Post2 = _interopRequireDefault(_Post);

class PostController{
     async store(req, res) {

        const post = await _Post2.default.create(req.body);

        return res.json(post)
    }

     async index(req, res) {
        let posts = await _Post2.default.find({});

        return res.json(posts);
    }

     async delete(req, res){
        await _Post2.default.deleteOne({_id: req.body.id});
        
        return res.json({message: "Registro apagado com sucesso."});
    }
}

exports. default = new PostController();