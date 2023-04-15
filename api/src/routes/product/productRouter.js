const express = require('express')
const router = express.Router()

const {
  getProductByName,
  getAllProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
} = require('../../controllers/product/product')

/**
 * @openapi
 * /api/product/:
 *   get:
 *     tags:
 *       - Product
 *     summary: Retorna productos sin filtros o por nombre.
 *     description: Obtiene todos los archivos elemento almacenados en la base de datos, o un archivo elemento específico si se proporciona un nombre de búsqueda.
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Búsqueda por nombre de archivo elemento.
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
 *                   description: Lista de archivos elemento encontrados. Si se proporciona un nombre de búsqueda, solo se devuelve un elemento.
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: Identificador único del archivo elemento.
 *                         example: 1
 *                       name:
 *                          type: string
 *                          example: edu
 *                       description:
 *                          type: text
 *                          example: matina es el mejor lugar
 *                       active:
 *                         type: boolean
 *                         description: Indica si el archivo elemento está activo o no.
 *                         example: true
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: Fecha de creación del archivo elemento.
 *                         example: 2023-04-13T18:32:00.321Z
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: Fecha de última actualización del archivo elemento.
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
 *                   example: El archivo elemento no fue encontrado en la base de datos.
 */
router.get('/', async (req, res) => {
  try {
    let { name } = req.query
    if (name) {
      let productByName = await getProductByName(name)
      res.status(200).send(productByName)
    } else {
      let getAll = await getAllProducts()
      res.status(200).send(getAll)
    }
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

/**
 * @openapi
 * /api/product/{id}:
 *   get:
 *     tags:
 *       - Product
 *     summary: Retorna un producto por ID.
 *     description: Obtiene un producto específico por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto a buscar.
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
 *                   example: "Product 1"
 *                 description:
 *                   type: string
 *                   example: "Description of product 1"
 *                 price:
 *                   type: number
 *                   format: double
 *                   example: 9.99
 *                 stock:
 *                   type: integer
 *                   example: 50
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2023-04-13T18:32:00.321Z
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2023-04-13T18:32:00.321Z
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
 *                   example: Product with id ${id} was not found.
 */
router.get('/:id', async (req, res) => {
  try {
    let { id } = req.params
    let productById = await getProductById(id)
    res.status(200).send(productById)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

/**
 * @openapi
 * /api/product/{id}:
 *   put:
 *     tags:
 *       - Product
 *     summary: Actualiza un producto existente.
 *     description: Actualiza los detalles de un producto existente identificado por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto a actualizar.
 *       - in: body
 *         name: product
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: Laptop
 *             description:
 *               type: string
 *               example: A high-end laptop with the latest specs.
 *             price:
 *               type: number
 *               format: float
 *               example: 1499.99
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Product updated successfully
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
 *                   example: Product with id ${id} was not found.
 */
router.put('/:id', async (req, res) => {
  try {
    let { id } = req.params
    let { name, description, price } = req.body
    await updateProduct(id, name, description, price)
    res.status(200).json('Product updated successfully')
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

/**
 * @openapi
 * /api/product:
 *   post:
 *     tags:
 *       - Product
 *     summary: Crea un nuevo producto.
 *     description: Crea un nuevo producto en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Producto 1"
 *               description:
 *                 type: string
 *                 example: "Descripción del producto 1"
 *               price:
 *                 type: number
 *                 example: 9.99
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Producto 1"
 *                 description:
 *                   type: string
 *                   example: "Descripción del producto 1"
 *                 price:
 *                   type: number
 *                   example: 9.99
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-04-15T18:32:00.321Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-04-15T18:32:00.321Z"
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
 *                   example: El producto no se pudo crear.
 */
router.post('/', async (req, res) => {
  try {
    let { name, description, price } = req.body
    let newProduct = await createProduct(name, description, price)
    res.status(200).send(newProduct)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

/**
 * @openapi
 * /api/product/{id}:
 *   delete:
 *     tags:
 *       - Product
 *     summary: Elimina un producto por ID.
 *     description: Elimina un producto específico por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto a eliminar.
 *       - in: body
 *         name: body
 *         description: Opciones para la eliminación del producto.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             active:
 *               type: boolean
 *               default: false
 *               description: Si se establece en verdadero, el producto se eliminará suavemente (soft delete).
 *               example: true
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Product Deleted Successfully
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
 *                   example: Product with id ${id} was not found.
 */
router.delete('/:id', async (req, res) => {
  try {
    let { id } = req.params
    let { active } = req.body
    await deleteProduct(id, active)
    res.status(200).send('Product Deleted Successfully')
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

module.exports = router
