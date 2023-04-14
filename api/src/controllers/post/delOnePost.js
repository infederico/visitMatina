const { Post } = require("../../db");

const delOnePost = async (id) => {
    try {
        const delOnePost = await Post.findByPk(id);
        if (delOnePost) {
            await Post.destroy({ where: { id: id } })
            return "Post eliminado";
        } else {
            throw new Error("Post no existe");
        }
        
    } catch (error) {
        return {error: error.message}
    }
};

module.exports = delOnePost;