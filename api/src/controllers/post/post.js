const { Post } = require("../../db");

const getAllPosts = async () => {
    try {
        const allPosts = await Post.findAll();
        if (allPosts.length > 0) {
            return allPosts;
        } else {
            throw new Error("Aun no hay posts");
        }
        
    } catch (error) {
        return {error: error.message}
    }
};

const getOnePost = async (id) => {
    try {
        const onePost = await Post.findByPk(id);
        if (onePost) {
            return onePost;
        } else {
            throw new Error("Post no encontrado");
        }
        
    } catch (error) {
        return {error: error.message}
    }
};

const postPost =  async (post) => {
    try {
        const {title, summary, content, date, active} = post;
        if (!title || !summary || !content ) {
            throw new Error('Faltan datos');
        }
        const postObj = {
            title: title,
            summary: summary,
            content: content,
            date:date,
            active: active
        }
        const postAdd = await Post.create(postObj);

        return postAdd;

    } catch (error) {
        return {error: error.message}
    }
}

const putOnePost =  async (post) => {
    try {
        const {id, title, summary, content, date, active} = post;
        const postId = await Post.findByPk(id);
        if (!postId){
            throw new Error ("No se encontro el post")
        }
        if (title) {
            await Post.update({title}, {where: {id_post: id}})
        }
        if (summary) {
            await Post.update({summary}, {where: {id_post: id}})
        }
        if (content) {
            await Post.update({content}, {where: {id_post: id}})
        }
        if (date) {
            await Post.update({date}, {where: {id_post: id}})
        }
        if (active) {
            await Post.update({active}, {where: {id_post: id}})
        }
        return "Post actualizado"
    } catch (error) {
        return {error: error.message}
    }
}

const delOnePost = async (id) => {
    try {
        const delOnePost = await Post.findByPk(id);
        if (delOnePost) {
            await Post.update({active: false},{ where: { id_post: id } })
            return "Post eliminado";
        } else {
            throw new Error("Post no existe");
        }
        
    } catch (error) {
        return {error: error.message}
    }
};

module.exports = {getAllPosts, getOnePost, postPost, putOnePost, delOnePost};