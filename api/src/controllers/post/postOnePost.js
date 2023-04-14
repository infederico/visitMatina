const { Post } = require("../../db");

const postPost =  async (post) => {
    try {
        const {date, content, active} = post;
        if (!date || !content) {
            throw new Error('Faltan datos');
        }
        const postObj = {
            date: date,
            content: content,
            active: active
        }
        const postAdd = await Post.create(postObj);

        return postAdd;

    } catch (error) {
        return {error: error.message}
    }
}

module.exports = postPost;