const { Post } = require("../../db");

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

module.exports = getOnePost;