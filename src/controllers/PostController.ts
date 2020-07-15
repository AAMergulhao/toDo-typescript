import {Request, Response} from "express";
import Post from "../schemas/Post";

class PostController{
    public async store(req: Request, res: Response): Promise<Response> {

        const post = await Post.create(req.body);

        return res.json(post)
    }

    public async index(req: Request, res: Response): Promise<Response> {
        let posts = await Post.find({});

        return res.json(posts);
    }

    public async delete(req: Request, res: Response): Promise<Response>{
        await Post.deleteOne({_id: req.body.id});
        
        return res.json({message: "Registro apagado com sucesso."});
    }
}

export default new PostController();