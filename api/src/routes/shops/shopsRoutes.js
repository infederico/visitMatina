const express = require('express');
const router = express.Router();
const { deleteShop, getAll, getShopById, createShop, updateShop } = require('../../controllers/shops/shopsControllers.js');


router.delete('/:id', deleteShop); //borrado logico de la tienda
router.get('/', getAll); //muestra todas las tiendas
router.get('/:id', getShopById);//muestra una tienda por id
router.post('/', createShop);//crea una tienda
router.put('/:id', updateShop); //actualiza una tienda

module.exports = router;
