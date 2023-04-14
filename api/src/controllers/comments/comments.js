const { Comments , Op } = require('../../db');

// Trae todos los elementos 
const getAllComments = async () => {

    try {
        
        let allComments = await Comments.findAll();
        return allComments;
        
    } catch (error) {
        return { error: error.message }
    }

}


// Trae todos los elementos Aprobados 
const getApprovedComments = async () => {

    try {
        
        let allApprovedComments = await Comments.findAll({
             where: { approved: true }
        });
        return allApprovedComments;
        
    } catch (error) {
        return { error: error.message }
    }

}


// Obtener un comment por id
const getComment = async (id) => {

    try {
        let comment = await Comments.findByPk(Number(id));
        return comment;
        
    } catch (error) {
        return { error: error.message }
    }

}


// Borrado logico de un comment por id
const deleteComment = async (id) => {

    try {
        
        let comment = await Comments.findByPk({ id });

        if(comment){
            Comments.update(
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


// Añadir un Comment 
const addComment = async (comment) => {

    try {

        const { description, rating, name, phone, email } = comment; 

        if( !description || !name || !email ){
            throw new Error('Datos incompletos.');
        }

        let obj = {
            description,
            rating,
            name,
            phone,
            email,
        }

        let result = await Comments.create(obj);
        return { success: true, result }

    } catch (error) {
        return { error: error.message }
    }

}

// Aprovar el comment por id
const approveComment = async (id, value) => {

    try {
        
        let comment = await Comments.findByPk(id);

        if(comment){
            Comments.update(
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
    getAllComments,
    getApprovedComments,
    getComment,
    deleteComment,
    addComment,
    approveComment,
}


