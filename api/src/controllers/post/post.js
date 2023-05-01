const { uptloadCl } = require('../../helpers/CloudinaryUpload');
const { Post, Users } = require('../../db');

const getAllPosts = async () => {
  try {
    const allPosts = await Post.findAll({
      where: { active: true },
      include: [{ model: Users, attributes: ['name', 'email'] }],
    });
    if (allPosts.length > 0) {
      return allPosts;
    } else {
      throw new Error('Aun no hay posts');
    }
  } catch (error) {
    return { error: error.message };
  }
};

const getOnePost = async (id_post) => {
  try {
    const onePost = await Post.findByPk(id_post, {
      include: [{ model: Users, attributes: ['name', 'email'] }],
    });
    if (onePost) {
      return onePost;
    } else {
      throw new Error('Post no encontrado');
    }
  } catch (error) {
    return { error: error.message };
  }
};

const getAllAllPosts = async () => {
  try {
    const allPosts = await Post.findAll({
      include: [{ model: Users, attributes: ['name', 'email'] }],
    });
    if (allPosts.length > 0) {
      return allPosts;
    } else {
      throw new Error('Aun no hay posts');
    }
  } catch (error) {
    return { error: error.message };
  }
};

const postPost = async (post) => {
  try {
    const { title, summary, content, image, date, active, id_user } = post;
    const cloudImg = await uptloadCl(image);
    if (!title || !summary || !content) {
      throw new Error('Faltan datos');
    }
    const postObj = {
      title: title,
      summary: summary,
      content: content,
      image: cloudImg,
      date: date,
      active: active,
      user_id: id_user,
    };
    await Post.create(postObj);

    return { success: 'Creación exitosa del post: ' + title };
  } catch (error) {
    return { error: error.message };
  }
};

const putOnePost = async (post) => {
  try {
    let { id_post, title, summary, content, date, active, image, user_id } =
      post;
    const postId = await Post.findByPk(id_post);

    if (!postId) {
      throw new Error('No se encontro el post');
    }
    if (title) {
      await Post.update({ title }, { where: { id_post: id_post } });
    }
    if (summary) {
      await Post.update({ summary }, { where: { id_post: id_post } });
    }
    if (content) {
      await Post.update({ content }, { where: { id_post: id_post } });
    }
    if (date) {
      await Post.update({ date }, { where: { id_post: id_post } });
    }
    if (active) {
      await Post.update({ active }, { where: { id_post: id_post } });
    }
    if (image) {
      const cloudImg = await uptloadCl(image);
      await Post.update({ image: cloudImg }, { where: { id_post: id_post } });
    }
    if (user_id) {
      await Post.update({ user_id }, { where: { id_post: id_post } });
    }
    if (image) {
      await Post.update({ image }, { where: { id_post: id_post } });
    }
    return { success: 'Modificacion exitosa al post: ' + title };
  } catch (error) {
    return { error: error.message };
  }
};

const delOnePost = async (id_post) => {
  try {
    const delOnePost = await Post.findByPk(id_post);
    if (delOnePost) {
      if (delOnePost.active === true) {
        await Post.update({ active: false }, { where: { id_post: id_post } });
        return { success: `El post ${delOnePost.title} fue eliminado` };
      }
      if (delOnePost.active === false) {
        await Post.update({ active: true }, { where: { id_post: id_post } });
        return { success: `El post ${delOnePost.title} fue activado` };
      }
    } else {
      throw new Error('Post no existe');
    }
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  getAllPosts,
  getAllAllPosts,
  getOnePost,
  postPost,
  putOnePost,
  delOnePost,
};
