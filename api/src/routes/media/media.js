const express = require('express');
const { 
    getAllMedia, 
    getMedia, 
    deleteMedia, 
    addMedia 
} = require('../../controllers/media/media');

const media = express.Router();

//ALL
media.get('/', async (req, res) => {

    try{
        
        const result = await getAllMedia();
        res.status(200).json({ result: result });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});


//ONE
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