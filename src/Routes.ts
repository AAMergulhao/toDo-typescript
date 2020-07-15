import {Router} from "express";
import PostController from "./controllers/PostController";
import Post from "./schemas/Post";


class Routes{
    public router;
    
    public constructor(){
        this.router = Router();
        this.post();
        this.view();
    }

    private post(): void{
        this.router.post('/post', PostController.store);
        this.router.get('/post', PostController.index);
        this.router.delete('/post', PostController.delete);
    }

    private view(): void{
        this.router.get('/', async(req,res) =>{
            const posts = await Post.find({});
            res.render('index', {posts})
        })
    }
}

export default new Routes().router;