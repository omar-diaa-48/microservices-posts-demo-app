import express, { Request, Response } from "express";
import { Post } from "../models/post";


const router = express.Router();

router.post('/api/posts', async (req:Request, res:Response) => {
    const {title, content, owner} = req.body;

    const post = await Post.build({
        title,
        content,
        owner
    })

    await post.save();

    res.status(201).send(post);
})

export { router as createPostRouter }