const { Router } = require("express");
const {getAllPosts, getOnePost, postPost, putOnePost, delOnePost} =require("../../controllers/post/post");
const router = Router();

// ruta get Obtine todos los posts solo enviando / si se agrega el id por query /?id= devuelve el post correspondiente
/**
 * @openapi
 * /api/post/:
 *   get:
 *     tags:
 *       - Post
 *     summary: Retorna todos los posts filtrados con la propiedad active en true.
 *     description: Ruta para retornar todos los posts.
 *     responses:
 *       200:
 *         description: Responde con todos los posts de la base de datos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array 
 *                   items:
 *                     type: object
 *                     properties:
 *                       id_post:
 *                         type: int
 *                         example: 1
 *                       title:
 *                         type: string
 *                         example: Titulo del post
 *                       summary:
 *                         type: string
 *                         example: Resumen del post
 *                       content:
 *                         type: text
 *                         example: Texto de prueba para los post del blog
 *                       date:
 *                         type: date
 *                         example: 2023-04-13T00:00:00.000Z
 *                       active:
 *                         type: boolean
 *                         example: true
 *                       createdAt:
 *                         type: datetime
 *                         example: 2023-04-13T18:32:00.321Z
 *                       updatedAt:
 *                         type: datetime
 *                         example: 023-04-13T18:32:00.321Z
 *       '404':
 *         description: Cuando no existe ningun post.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Envia un mensaje indicando que no existen posts.
 *                   example: Aun no hay posts
 */
router.get("/", async (req, res) => {
  try {
      const allPosts = await getAllPosts();
      if (allPosts.error) {
        throw new Error(allPosts.error);
      } else {
        res.status(200).json(allPosts);
      }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

/**
 * @openapi
 * /api/post/{id}:
 *   get:
 *     tags:
 *       - Post
 *     summary: Retorna un post.
 *     description: Ruta para retornar un post enviado el id por params.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         description: Obtine el post por id.
 *     responses:
 *       200:
 *         description: Responde con el post encontrado en la base de datos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array 
 *                   items:
 *                     type: object
 *                     properties:
 *                       id_post:
 *                         type: int
 *                         example: 1
 *                       title:
 *                         type: string
 *                         example: Titulo del post
 *                       summary:
 *                         type: string
 *                         example: Resumen del post
 *                       content:
 *                         type: text
 *                         example: Texto de prueba para los post del blog
 *                       date:
 *                         type: date
 *                         example: 2023-04-13T00:00:00.000Z
 *                       active:
 *                         type: boolean
 *                         example: true
 *                       createdAt:
 *                         type: datetime
 *                         example: 2023-04-13T18:32:00.321Z
 *                       updatedAt:
 *                         type: datetime
 *                         example: 023-04-13T18:32:00.321Z
 *       '404':
 *         description: Cuando no se encuentra el post.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Envia un mensaje indicando que no se encontro el post.
 *                   example: Post no encontrado
 */
router.get("/:id", async (req, res) => {
  const {id} = req.params;
  try {
    if (id) {
      const onePost = await getOnePost(id);
      if (onePost.error) {
        throw new Error(onePost.error);
      } else {
        res.status(200).json(onePost);
      }
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//ruta post Postea un post
/**
 * @openapi
 * /api/post/:
 *   post:
 *     tags:
 *       - Post
 *     summary: Crea un post.
 *     description: Ruta para crear un post enviando la data por body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               example: Titulo del post
 *             summary:
 *               type: string
 *               example: Resumen del post
 *             content:
 *               type: text
 *               example: Test
 *         description: Estructura del body.
 *     responses:
 *       200:
 *         description: Responde con el post creado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array 
 *                   items:
 *                     type: object
 *                     properties:
 *                       id_post:
 *                         type: int
 *                         example: 1
 *                       title:
 *                         type: string
 *                         example: Titulo del post
 *                       summary:
 *                         type: string
 *                         example: Resumen del post
 *                       content:
 *                         type: text
 *                         example: Texto de prueba para los post del blog
 *                       date:
 *                         type: date
 *                         example: 2023-04-13T00:00:00.000Z
 *                       active:
 *                         type: boolean
 *                         example: true
 *                       createdAt:
 *                         type: datetime
 *                         example: 2023-04-13T18:32:00.321Z
 *                       updatedAt:
 *                         type: datetime
 *                         example: 023-04-13T18:32:00.321Z
 *       '404':
 *         description: Cuando faltan datos que no se enviaron.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Envia un mensaje indicando que no se ingresaron los datos completos.
 *                   example: Faltan datos
 */
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
/**
 * @openapi
 * /api/post/:
 *   put:
 *     tags:
 *       - Post
 *     summary: Actualiza un post.
 *     description: Ruta para actualizar un post enviando la data por body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          schema:
 *           type: object
 *           properties:
 *             id_post:
 *               type: int
 *               example: 1
 *             title:
 *               type: string
 *               example: Titulo del post
 *             summary:
 *               type: string
 *               example: Resumen del post
 *             content:
 *               type: text
 *               example: Texto de prueba para los post del blog
 *             date:
 *               type: date
 *               example: 2023-04-13T00:00:00.000Z
 *             active:
 *               type: boolean
 *               example: true
 *         description: Estructura del body (opcionales title, summary, content, date, active).
 *     responses:
 *       200:
 *         description: Responde con un mensaje .
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string 
 *                   example: Post actualizado
 *       '404':
 *         description: Cuando no se encontro el post a actualizar.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Envia un mensaje indicando que no se encontro el post.
 *                   example: No se encontro el post
 */
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

//ruta delete Setea en false el atributo active de un post enviando por query /?id=
/**
 * @openapi
 * /api/post/:
 *   delete:
 *     tags:
 *       - Post
 *     summary: Eminidado logico un post.
 *     description: Ruta para eliminar logicamente un post enviando el id por query.
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         description: Se envia el id del post a eliminar.
 *     responses:
 *       200:
 *         description: Responde con un mensaje .
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string 
 *                   example: Post eliminado
 *       '404':
 *         description: Cuando no se encontro el post a eliminar.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Envia un mensaje indicando que no existe el post.
 *                   example: Post no existe
 */
router.delete("/", async (req, res) => {
    const {id_post} = req.query;
    try {
        const postDel = await delOnePost(id_post);
        if (postDel.error){
            throw new Error(postDel.error)
        }
        res.status(200).send(postDel);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = router;