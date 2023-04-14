const express = require('express');
const { 
    getAllComments,
    getApprovedComments,
    getComment,
    deleteComment,
    addComment,
    approveComment
} = require('../../controllers/comments/comments');

const comment = express.Router();

//ALL
comment.get('/', async (req, res) => {

    try{
        
        const result = await getAllComments();
        res.status(200).json({ result: result });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});

// All Approved
comment.get('/approved/', async (req, res) => {

    try{
        console.log('obteniendo todos los aprobados...');
        const result = await getApprovedComments();
        res.status(200).json({ result: result });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});


//ONE
comment.get('/:id', async (req, res) => {

    try{

        console.log('obteniendo por id...');
        const { id } = req.params; 
        const result = await getComment(id);

        if(result.error){
            throw new Error(result.error);
        }

        res.status(200).json({ result: result });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});



// Approve comment
comment.put('/:id/:valor', async (req, res) => {

    try{
        const { id, valor } = req.params; 
        const result = await approveComment(id,valor);
        res.status(200).json({ result: result });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});


//DELETE
comment.delete('/:id', async (req, res) => {

    try{
        const { id } = req.params; 
        const result = await deleteComment(id);
        res.status(200).json({ result: result });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});


//POST
comment.post('/', async (req, res) => {
    
    try{

        const data = req.body;
        let newComment = await addComment(data); 

        if(newComment.error){
            throw new Error(newComment.error);
        }

        res.status(200).json({ success: true, result: newComment });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});

module.exports = {
    comment
}