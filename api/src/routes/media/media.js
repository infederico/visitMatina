const express = require('express');
const { 
    getAllMedia, 
    getMedia, 
    deleteMedia, 
    addMedia 
} = require('../../controllers/media/media');

const media = express.Router();

//ALL
/**
 * @openapi
 * /api/media/:
 *   get:
 *     tags:
 *       - Media
 *     summary: Retorna la url de un archivo en cloudinary.
 *     responses:
 *       200:
 *         description: Retorna todos los archivos multimedia sin filtros
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean 
 *                   example: true
 *                 result:
 *                   type: array 
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: int
 *                         example: 1
 *                       url:
 *                         type: string
 *                         example: https://res.cloudinary.com/factra/image/upload/v1681410716/m5zl0rkdpfogcse05kq7.png
 *                       active:
 *                         type: boolean
 *                         example: true
 *                       createdAt:
 *                         type: datetime
 *                         example: 2023-04-13T18:32:00.321Z
 *                       updatedAt:
 *                         type: datetime
 *                         example: 023-04-13T18:32:00.321Z
 * 
 * 
 */
media.get('/', async (req, res) => {

    try{
        
        const result = await getAllMedia();
        res.status(200).json({success: true, result: result });

    }catch(err){
        res.status(404).json({success: false,  error: err.message });
    }

});


//ONE
/**
 * @openapi
 * /api/media/:id:
 *   get:
 *     tags:
 *       - Media
 *     responses:
 *       200:
 *         description: Retorna solo 1(Uno) multimedia pasando id por query string
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean 
 *                   example: true
 *                 result:
 *                   type: array 
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: int
 *                         example: 1
 *                       url:
 *                         type: string
 *                         example: https://res.cloudinary.com/factra/image/upload/v1681410716/m5zl0rkdpfogcse05kq7.png
 *                       active:
 *                         type: boolean
 *                         example: true
 *                       createdAt:
 *                         type: datetime
 *                         example: 2023-04-13T18:32:00.321Z
 *                       updatedAt:
 *                         type: datetime
 *                         example: 023-04-13T18:32:00.321Z
 * 
 * 
 */
media.get('/:id', async (req, res) => {

    try{
        const { id } = req.params; 
        const result = await getMedia(id);

        if(result.error){
            throw new Error(result.error);
        }

        res.status(200).json({ result: result });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});


//DELETE
/**
 * @openapi
 * /api/media/:id:
 *   delete:
 *     tags:
 *       - Media
 *     responses:
 *       200:
 *         description: Borrado logico de Media
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: boolean 
 *                   example: true
 * 
 */
media.delete('/:id', async (req, res) => {

    try{
        const { id } = req.params; 
        const result = await deleteMedia(id);
        res.status(200).json({ result: result });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});


//POST
/**
 * @openapi
 * /api/media/:
 *   post:
 *     tags:
 *       - Media
 *     requestBody:
 *       description: Base64-encoded image
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: byte
 *                 description: Base64-encoded image
 *                 example: iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAfUlEQVQ4je3SsQ2AIAwF0Q9lN7dATl4QUU6fDCI6/TFU6iJoiSfI1m7kwuExKTp9fCYj5i5DnV7syuLZKKzV7Y1wQwxUMlmbxhFUYXszWwwlEwh2Zca0FsojGcqf8Wd0JSzvDfJLt0xHgAAAAASUVORK5CYII=
 *     
 *     responses:
 *       200:
 *         description: Agrega una imagen o video a la tbl de media recibe recurosos en BSE64
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean 
 *                   example: true
 *                 result:
 *                   type: array 
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: int
 *                         example: 1
 *                       url:
 *                         type: string
 *                         example: https://res.cloudinary.com/factra/image/upload/v1681410716/m5zl0rkdpfogcse05kq7.png
 *                       active:
 *                         type: boolean
 *                         example: true
 *                       createdAt:
 *                         type: datetime
 *                         example: 2023-04-13T18:32:00.321Z
 *                       updatedAt:
 *                         type: datetime
 *                         example: 023-04-13T18:32:00.321Z
 * 
 * 
 */
media.post('/', async (req, res) => {
    
    try{

        const clImg = req.body.image;
        let newMedia = await addMedia(clImg); 

        if(newMedia.error){
            throw new Error(newMedia.error);
        }

        res.status(200).json({ success: true, result: newMedia });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});

module.exports = {
    media
}