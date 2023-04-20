const express = require('express')
const router = express.Router()

const {
  getUserByName,
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
} = require('../../controllers/users/users')

/**
 * @openapi
 * /api/users/:
 *   get:
 *     tags:
 *       - Users
 *     summary: Retorna todos los usuarios o uno por nombre.
 *     description: Obtiene todos los elementos almacenados en la base de datos, o un elemento específico si se proporciona un nombre de búsqueda.
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Búsqueda por nombre de usuario.
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indica si la operación se completó exitosamente.
 *                   example: true
 *                 result:
 *                   type: array
 *                   description: Lista de elementos encontrados. Si se proporciona un nombre de búsqueda, solo se devuelve un elemento.
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: int
 *                         example: 1
 *                       name:
 *                          type: string
 *                          example: edu
 *                       email:
 *                          type: string
 *                          example: edu
 *                       password:
 *                         type: string
 *                         example: contrasena
 *                       admin:
 *                         type: boolean
 *                         example: true
 *                       verified:
 *                         type: boolean
 *                         example: true
 *                       active:
 *                         type: boolean
 *                         example: true
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: 2023-04-13T18:32:00.321Z
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: 023-04-13T18:32:00.321Z
 *       '404':
 *         description: No encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error descriptivo.
 *                   example: El elemento no fue encontrado en la base de datos.
 */
router.get('/', async (req, res) => {
  try {
    let { email } = req.query
    if (email) {
      let userByName = await getUserByName(email)
      res.status(200).send(userByName)
    } else {
      let gellAllUsers = await getAllUsers()
      res.status(200).send(gellAllUsers)
    }
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

/**
 * @openapi
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Retorna un usuario por ID.
 *     description: Obtiene un elemento específico por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a buscar.
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: int
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "edu"
 *                 email:
 *                   type: string
 *                   example: "edu"
 *                 password:
 *                   type: string
 *                   example: "contrasena"
 *                 admin:
 *                   type: boolean
 *                   example: true
 *                 verified:
 *                   type: boolean
 *                   example: true
 *                 active:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2023-04-13T18:32:00.321Z
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: 023-04-13T18:32:00.321Z
 *       '404':
 *         description: No encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error descriptivo.
 *                   example: User with id ${id} was not found.
 */

router.get('/:id', async (req, res) => {
  try {
    let { id } = req.params
    let userById = await getUserById(id)
    res.status(200).send(userById)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

/**
 * @openapi
 * /api/users/{id}:
 *   put:
 *     tags:
 *       - Users
 *     summary: Actualiza un usuario por ID.
 *     description: Actualiza los campos de un usuario específico por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a actualizar.
 *       - in: body
 *         name: user
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *         description: Campos del usuario a actualizar.
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito descriptivo.
 *                   example: Usuario actualizado correctamente.
 *       '404':
 *         description: No encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error descriptivo.
 *                   example: Usuario con ID ${id} no encontrado.
 */
router.put('/:id_user', async (req, res) => {
  try {
    let { id_user } = req.params
    let { name, email, password, admin } = req.body
    await updateUser(id_user, name, email, password, admin)
    res.status(200).send('User updated successfully')
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

/**
 * @openapi
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     summary: Crea un nuevo usuario.
 *     description: Crea un nuevo usuario con los campos proporcionados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: int
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   example: john.doe@example.com
 *                 password:
 *                   type: string
 *                   example: password123
 *                 admin:
 *                   type: boolean
 *                   example: false
 *                 verified:
 *                   type: boolean
 *                   example: false
 *                 active:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2023-04-14T12:00:00.000Z
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2023-04-14T12:00:00.000Z
 *       '404':
 *         description: No encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error descriptivo.
 *                   example: No se pudo crear el usuario.
 */
router.post('/', async (req, res) => {
  try {
    let { name, email, password } = req.body
    let newUser = await createUser(name, email, password)
    res.status(200).send(newUser)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

/**
 * @openapi
 * /api/users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Elimina un usuario por ID.
 *     description: Elimina un usuario específico por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a eliminar.
 *       - in: body
 *         name: active
 *         description: Establece el estado activo del usuario.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             active:
 *               type: boolean
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito al eliminar al usuario.
 *                   example: User deleted successfully.
 *       '404':
 *         description: No encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error descriptivo.
 *                   example: User with id ${id} was not found.
 */
router.delete('/:id', async (req, res) => {
  try {
    let { id } = req.params
    let { active } = req.body
    await deleteUser(id, active)
    res.status(200).send('User Deleted Successfully')
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

module.exports = router
