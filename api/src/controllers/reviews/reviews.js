const { Reviews, Users , Op } = require('../../db');

// Trae todos los elementos 
const getAllReviews = async () => {

    try {
        
        let allReviews= await Reviews.findAll({ 
            where: { active: true, parent_id: 0 }, 
            include: { model: Users,
                attributes: { exclude: ['id_user','password','verified','active','admin','media_id']  }
            } 
        });

        let allReviewsThread = [];

        if(allReviewsThread.length){
           for(let review of allReviews){
               let children = await getReviewChildren(review.review_id);
               allReviewsThread.push({ ...review.dataValues, respuestas: children });
           }
        }

        return allReviews;
        
    } catch (error) {
        return { error: error.message }
    }

}

const getReviewChildren = async (id) => {

    try {
        
        let allResponses = await Reviews.findAll({ where: { active: true, parent_id: id } });
        return allResponses;
        
    } catch (error) {
        return { error: error.message }
    }

}


// Trae todos los elementos Aprobados 
const getApprovedReviews = async () => {

    try {
        
        let allApprovedReviews = await Reviews.findAll({
             where: { approved: true }
        });
        return allApprovedReviews;
        
    } catch (error) {
        return { error: error.message }
    }

}

// Trae todos los elementos Aprobados de una tienda 
const getShopReviews = async (id) => {

    try {
        
        let allApprovedReviews = await Reviews.findAll({
            where: { shop_id: id, approved: true },
            include: { model: Users,
                attributes: { exclude: ['id_user','password','verified','active','admin','media_id']  }
            } 
        });

        return allApprovedReviews;
        
    } catch (error) {
        return { error: error.message }
    }

}

// Obtener un review por id
const getReview = async (id) => {

    try {
        let review = await Reviews.findByPk(Number(id));
        return review;
        
    } catch (error) {
        return { error: error.message }
    }

}


// Borrado logico de un review por id
const deleteReview = async (id) => {

    try {
        
        let review  = await Reviews.findByPk({ id });

        if(review){
            Reviews.update(
                { actve: false },
                { where: { id }}
            )
            return true;
        }

        throw new Error('El elemento no existe.');
        
    } catch (error) {
        return { error: error.message }
    }

}


// Añadir un Review 
const addReview = async (review) => {

    try {

        const { user_id, description, rating, approved } = review; 

        console.log(review);
        if( !user_id || !description ){
            throw new Error('Datos incompletos.');
        }

        if(!approved) approved = false;

        let obj = {
            user_id,
            description,
            approved
        }

        if(review.rating){ obj.rating = review.rating }
        if(review.user_id){ obj.user_id = review.user_id }
        if(review.shop_id){ obj.shop_id = review.shop_id }
        if(review.post_id){ obj.post_id = review.post_id }
        if(review.parent_id){ obj.parent_id = review.parent_id }

        let result = await Reviews.create(obj);
        return { success: true, result }

    } catch (error) {
        return { error: error.message }
    }

}

// Aprovar el review por id
const approveReview = async (id, value) => {

    try {
        
        let review = await Reviews.findByPk(id);

        if(review){
            Reviews.update(
                { approved: value },
                { where: { id }}
            )
            return true;
        }

        throw new Error('El elemento no existe.');
        
    } catch (error) {
        return { error: error.message }
    }

}


module.exports = { 
    getAllReviews,
    getApprovedReviews,
    getShopReviews,
    getReview,
    deleteReview,
    addReview,
    approveReview
}


