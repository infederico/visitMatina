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

module.exports = getAllPosts;