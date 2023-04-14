const { Post } = require("../../db");

const putOnePost =  async (post) => {
    try {
        const {id, date, content, active} = post;
        const postId = await Post.findByPk(id);
        if (!postId){
            throw new Error ("No se encontro el post")
        }
        if (date) {
            await Post.update({date}, {where: {id: id}})
        }
        if (content) {
            await Post.update({content}, {where: {id: id}})
        }
        if (active) {
            await Post.update({active}, {where: {id: id}})
        }
        return "Post actualizado"
    } catch (error) {
        return {error: error.message}
    }
}

module.exports = putOnePost;