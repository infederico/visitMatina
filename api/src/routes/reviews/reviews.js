const express = require('express');
const { 
    getAllReviews,
    getApprovedReviews,
    getShopReviews,
    getReview,
    deleteReview,
    addReview,
    approveReview
} = require('../../controllers/reviews/reviews');

const review = express.Router();

//ALL
review.get('/', async (req, res) => {

    try{
        
        const result = await getAllReviews();
        res.status(200).json({ result: result });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});

// All Approved
review.get('/approved/', async (req, res) => {

    try{
        console.log('obteniendo todos los reviews aprobados...');
        const result = await getApprovedReviews();
        res.status(200).json({ result: result });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});

review.get('/shop/:id', async (req, res) => {

    try{
        console.log('obteniendo review por id de shop ...');
        const { id } = req.params;
        const result = await getShopReviews(id); 
        res.status(200).json({ result: result });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});


//ONE
review.get('/:id', async (req, res) => {

    try{

        console.log('obteniendo review por id...');
        const { id } = req.params; 
        const result = await getReview(id);

        if(result.error){
            throw new Error(result.error);
        }

        res.status(200).json({ result: result });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});



// Approve  review
review.put('/:id/:valor', async (req, res) => {

    try{
        const { id, valor } = req.params; 
        const result = await approveReview(id,valor);
        res.status(200).json({ result: result });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});


//DELETE
review.delete('/:id', async (req, res) => {

    try{
        const { id } = req.params; 
        const result = await deleteReview(id);
        res.status(200).json({ result: result });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});


//POST
review.post('/', async (req, res) => {
    
    try{

        const data = req.body;
        let result = await addReview(data); 

        if(result.error){
            throw new Error(result.error);
        }

        res.status(200).json({ success: true, result: result });

    }catch(err){
        res.status(404).json({ error: err.message });
    }

});

module.exports = {
    review
}