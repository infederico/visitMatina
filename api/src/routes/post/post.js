const { Router } = require("express");
const {getAllPosts, getOnePost, postPost, putOnePost, delOnePost} =require("../../controllers/post/post");
const router = Router();

// ruta get Obtine todos los posts solo enviando / si se agrega el id por query /?id= devuelve el post correspondiente
router.get("/", async (req, res) => {
  const { id } = req.query;
  try {
    if (id) {
      const onePost = await getOnePost(id);
      if (onePost.error) {
        throw new Error(onePost.error);
      } else {
        res.status(200).json(onePost);
      }
    } else {
      const allPosts = await getAllPosts();
      if (allPosts.error) {
        throw new Error(allPosts.error);
      } else {
        res.status(200).json(allPosts);
      }
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//ruta post Postea un post
router.post("/", async (req, res) => {
  try {
    const post = await postPost(req.body);
    if (post.error) {
      throw new Error(post.error);
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//ruta put Actualiza un post
router.put("/", async (req, res) => {
    try {
        const putPost = await putOnePost(req.body);
        if (putPost.error) {
            throw new Error(putPost.error);
        }
        res.status(200).send(putPost);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

//ruta delete Setea en false el atributo active un post enviando por query /?id=
router.delete("/", async (req, res) => {
    const {id} = req.query;
    try {
        const postDel = await delOnePost(id);
        if (postDel.error){
            throw new Error(postDel.error)
        }
        res.status(200).send(postDel);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = router;